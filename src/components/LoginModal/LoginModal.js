import React, { useState } from "react";
import { CloseIcon } from "components";
import { useNavigate } from "react-router-dom";
import "./LoginModal.css";

export default function LoginModal({ closeModal }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: credentials.username,
          pw: credentials.password,
        }),
      });
      const data = await response.json();
      setLoading(false);

      if (data.ok) {
        sessionStorage.setItem("user", JSON.stringify(data.user));
        console.log("로그인 성공:", data.user);
        closeModal();
        navigate("/");
        window.location.reload();
      } else {
        setError(data.msg || "로그인 실패");
      }
    } catch (error) {
      console.error("로그인 요청 중 오류가 발생했습니다.", error);
      setError("로그인 요청 중 오류가 발생했습니다.");
      setLoading(false);
    }
  };

  return (
    <div className="LoginModal">
      <div className="panel">
        <div className="header">
          <div className="title">로그인</div>
          <CloseIcon onClick={closeModal} />
        </div>
        <div className="content">
          {loading && <div>Loading...</div>}
          <form className="login" onSubmit={handleSubmit}>
            <div className="InputField">
              <label className="label">아이디</label>
              <input
                className="input"
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="InputField">
              <label className="label">비밀번호</label>
              <input
                className="input"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
              />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit" disabled={loading}>
              로그인
            </button>
            <button type="button" onClick={closeModal}>
              닫기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
