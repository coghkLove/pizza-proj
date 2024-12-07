import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Container, PizzaModal, PizzaTabs } from "components";
import useModal from "hooks/useModal";
import "./PizzaList.css";

function InfoIcon({ onClick }) {
  return (
    <div
      className="InfoIcon"
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    </div>
  );
}

function PizzaCard({ pizza, openModal }) {
  const navigate = useNavigate();
  return (
    <div className="PizzaCard" onClick={() => navigate(`/pizza/${pizza.id}`)}>
      <div className="thumb">
        <img src={pizza.img} alt={pizza.title} width="100%" height="100%" />
        <InfoIcon onClick={openModal} />
      </div>
      <div className="title">
        <h2>{pizza.title}</h2>
        {pizza.isNew && (
          <div className="new">
            <span>new</span>
          </div>
        )}
      </div>
      <div className="price">
        <span className="size">L</span>
        {`${pizza.price}원`}
      </div>
      <div>{pizza.content}</div>
    </div>
  );
}

export default function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const { isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/pizza")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPizzas(data))
      .catch((error) => {
        console.error("Fetching error:", error);
        navigate("/not-found");
      });
  }, [navigate]);

  return (
    <>
      <Layout>
        <Container>
          <h1>메뉴</h1>
          <PizzaTabs />
          <div className="PizzaList">
            {pizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} openModal={openModal} />
            ))}
          </div>
        </Container>
      </Layout>
      {isOpen && <PizzaModal closeModal={closeModal} />}
    </>
  );
}
