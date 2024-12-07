import "./PizzaModal.css";
import CloseIcon from "../CloseIcon/CloseIcon";
import { useState } from "react";

function Accordion() {
  // 각 섹션의 상태를 저장하는 state 배열
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  // 특정 섹션의 표시 상태를 토글하는 함수
  const toggleSection = (index) => {
    setIsOpen(isOpen.map((state, idx) => (idx === index ? !state : state)));
  };

  return (
    <div className="Accordion">
      <div className="title" onClick={() => toggleSection(0)}>
        제품 상세보기
      </div>
      {isOpen[0] && (
        <div className="content">고소함과 얼얼함의 콜라보레이션!</div>
      )}

      <div className="title" onClick={() => toggleSection(1)}>
        메인 토핑
      </div>
      {isOpen[1] && (
        <div className="content">
          *맥콘 베이컨: 트러플 크림 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라,
          맥앤치즈, 옥수수 / *마라 불고기: 토마토 소스, 콰트로 치즈 퐁듀, 체더,
          모차렐라, 페퍼로니, 청피망, 마라 포크 크럼블
        </div>
      )}

      <div className="title" onClick={() => toggleSection(2)}>
        원산지
      </div>
      {isOpen[2] && (
        <div className="content">
          베이컨(돼지고기) : 외국산 / 페퍼로니[돼지고기(국내산), 쇠고기(호주산)]
          / 마라 포크 크럼블(돼지고기) : 국내산
        </div>
      )}

      <div className="title" onClick={() => toggleSection(3)}>
        도미노피자의 특징
      </div>
      {isOpen[3] && (
        <div className="content">
          <h3>매일매일 만들어 신선하고 쫄깃 고소한 도우!</h3>
          <p>
            최고의 도우 맛을 위해 물, 밀가루, 이스트 등을 최적의 비율로 매일
            반죽하여 냉장저온(1~3°C) 숙성한 도미노 피자의 도우! 수분보유량이
            우수하고 도우 입자 사이의 공기층이 적절히 형성된 3일~7일차 도우를
            사용해 전문 피자메이커가 핸드토스드(Hand Tossed) 방식으로 만들어
            특유의 쫄깃하고 포실포실한 식감과 맛, 향으로 오감을 충족시킵니다.
          </p>
        </div>
      )}
    </div>
  );
}

export default function PizzaModal({ closeModal }) {
  return (
    <div className="PizzaModal" onClick={closeModal}>
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <div className="title">맥콘 베이컨+마라 불고기</div>
          <CloseIcon onClick={closeModal} />
        </div>
        <div className="content">
          <div className="main">
            <div className="thumb">
              <img src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_0j7mUmht.jpg" />
              <p> 모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.</p>
            </div>
            <div className="info">
              <label>메인 토핑</label>
              <p>
                *맥콘 베이컨: 트러플 크림 소스, 콰트로 치즈 퐁듀, 체더,
                모차렐라, 맥앤치즈, 옥수수 / *마라 불고기: 토마토 소스, 콰트로
                치즈 퐁듀, 체더, 모차렐라, 페퍼로니, 청피망, 마라 포크 크럼블
              </p>
              <label>원산지</label>
              <p>
                베이컨(돼지고기) : 외국산 / 페퍼로니[돼지고기(국내산),
                쇠고기(호주산)] / 마라 포크 크럼블(돼지고기) : 국내산
              </p>
            </div>
          </div>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
