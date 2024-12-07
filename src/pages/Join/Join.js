import React, { useState } from "react";
import { Layout, Container } from "components";
import "./Join.css";

export default function Join() {
  const [formData, setFormData] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    // 아이디 검증: 영문 소문자, 숫자만 가능, 최소 4자
    if (!/^[a-z0-9]{4,}$/.test(formData.username)) {
      newErrors.username =
        "아이디는 영문 소문자와 숫자만 가능하며, 최소 4자 이상이어야 합니다.";
    }

    // 비밀번호 검증: 최소 8자 이상, 영문 대소문자, 숫자, 특수문자 포함
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "비밀번호는 최소 8자 이상이며, 영문 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.";
    }

    // 비밀번호 확인 검증
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    // 닉네임 검증: 특수문자 제외, 한글, 영문 대소문자, 숫자만 가능
    if (!/^[\w가-힣]{1,}$/.test(formData.nickname)) {
      newErrors.nickname =
        "닉네임은 특수문자를 제외한 한글, 영문 대소문자, 숫자만 가능합니다.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    // 데이터 전송 로직
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          nickname: formData.nickname,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("회원가입 성공", data);
      } else {
        throw new Error(data.message || "회원가입 실패");
      }
    } catch (error) {
      console.error("회원가입 에러 발생:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <Container>
        <div className="Join">
          <h1>회원가입</h1>
          <form onSubmit={handleSubmit}>
            <div className="InputField">
              <label className="label">아이디</label>
              <input
                className="input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <div className="error">{errors.username}</div>
              )}
            </div>
            <div className="InputField">
              <label className="label">닉네임</label>
              <input
                className="input"
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
              />
              {errors.nickname && (
                <div className="error">{errors.nickname}</div>
              )}
            </div>
            <div className="InputField">
              <label className="label">비밀번호</label>
              <input
                className="input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div className="InputField">
              <label className="label">비밀번호 확인</label>
              <input
                className="input"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </div>
            <button type="submit">회원가입</button>
          </form>
        </div>
      </Container>
    </Layout>
  );
}
