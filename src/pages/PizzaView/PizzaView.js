import { Layout, Container, PizzaModal, Counter, PizzaTabs } from "components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { formatCurrency } from "lib/utils";
import { useNavigate } from "react-router-dom";
import useModal from "hooks/useModal";
import "./PizzaView.css";

function ToppingCard({ topping, count, increment, decrement }) {
  const { imgUrl, name, price } = topping;
  return (
    <div className="ToppingCard">
      <img src={imgUrl} width="60" alt={name} />
      <div className="detail">
        <div className="name">{name}</div>
        <div className="price">{price}원</div>
      </div>
      <Counter
        count={count}
        increment={() => increment(topping.id)}
        decrement={() => decrement(topping.id)}
      />
    </div>
  );
}

export default function PizzaView() {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();
  const [pizzaCount, setPizzaCount] = useState(1);
  const [toppingCounts, setToppingCounts] = useState({
    1: 0, // 파인애플
    2: 0, // 도미노치즈
    3: 0, // 올리브
  });

  //주문정보 저장
  const saveOrderToSession = () => {
    const orderDetails = {
      pizza: {
        name: "맥콘 베이컨+클래식 리코타",
        count: pizzaCount,
        pricePerUnit: 17900,
        totalPrice: 17900 * pizzaCount,
      },
      toppings: toppings.map((topping) => ({
        id: topping.id,
        name: topping.name,
        count: toppingCounts[topping.id],
        pricePerUnit: topping.price,
        totalPrice: topping.price * toppingCounts[topping.id],
      })),
      totalOrderPrice:
        17900 * pizzaCount +
        Object.keys(toppingCounts).reduce(
          (sum, key) =>
            sum +
            toppings.find((t) => t.id === parseInt(key)).price *
              toppingCounts[key],
          0
        ),
    };

    sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails));
  };

  const calculateTotalOrderPrice = () => {
    return (
      17900 * pizzaCount +
      Object.keys(toppingCounts).reduce((sum, key) => {
        const topping = toppings.find((t) => t.id === parseInt(key));
        return sum + topping.price * toppingCounts[key];
      }, 0)
    );
  };

  const handleCheckout = () => {
    const totalOrderPrice = calculateTotalOrderPrice();
    const orderDetails = {
      pizza: {
        name: "맥콘 베이컨+클래식 리코타",
        count: pizzaCount,
        pricePerUnit: 17900,
        totalPrice: 17900 * pizzaCount,
      },
      toppings: toppings.map((topping) => ({
        id: topping.id,
        name: topping.name,
        count: toppingCounts[topping.id],
        pricePerUnit: topping.price,
        totalPrice: topping.price * toppingCounts[topping.id],
      })),
      totalOrderPrice: totalOrderPrice,
    };

    let currentOrders = JSON.parse(sessionStorage.getItem("orders")) || [];
    currentOrders.push(orderDetails);
    sessionStorage.setItem("orders", JSON.stringify(currentOrders));
    navigate("/cart");
  };

  const incrementTopping = (id) => {
    setToppingCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const decrementTopping = (id) => {
    setToppingCounts((prev) => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
  };
  const incrementPizza = () => setPizzaCount((prev) => prev + 1);
  const decrementPizza = () => setPizzaCount((prev) => Math.max(1, prev - 1));

  const toppings = [
    {
      id: 1,
      imgUrl: "https://cdn.dominos.co.kr/admin/upload/topping/RTP051.jpg",
      name: "파인애플 40g(8개)",
      price: 500,
    },
    {
      id: 2,
      imgUrl: "https://cdn.dominos.co.kr/admin/upload/topping/RTP036.jpg",
      name: "도미노치즈 100g",
      price: 3300,
    },
    {
      id: 3,
      imgUrl: "https://cdn.dominos.co.kr/admin/upload/topping/RTP059.jpg",
      name: "올리브 20g",
      price: 300,
    },
  ];

  return (
    <>
      <Layout>
        <Container>
          <h1>메뉴</h1>
          <PizzaTabs />
          <div className="PizzaView">
            <div className="thumb">
              <img
                src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_Sby1plV9.jpg"
                alt="피자 이미지"
              />
              <div className="button" onClick={openModal}>
                제품 상세
              </div>
            </div>
            <div className="info">
              <h1 className="title">맥콘 베이컨+클래식 리코타</h1>
              <div>
                #포장 16,900원
                <br />
                #맥앤치즈의 고소함과 만난 클래식의 맛!
              </div>
              <div className="price">
                <span>L</span>17,900원
              </div>
              <div>
                {toppings.map((topping) => (
                  <ToppingCard
                    key={topping.id}
                    topping={topping}
                    count={toppingCounts[topping.id]}
                    increment={incrementTopping}
                    decrement={decrementTopping}
                  />
                ))}
              </div>
              <Counter
                count={pizzaCount}
                increment={incrementPizza}
                decrement={decrementPizza}
              />
              <div className="sum" onClick={handleCheckout}>
                총 금액:{" "}
                {formatCurrency(
                  17900 * pizzaCount +
                    Object.keys(toppingCounts).reduce(
                      (sum, key) =>
                        sum +
                        toppings.find((t) => t.id === parseInt(key)).price *
                          toppingCounts[key],
                      0
                    )
                )}
                원 담기
              </div>
            </div>
          </div>
        </Container>
      </Layout>
      {isOpen && <PizzaModal closeModal={closeModal} />}
    </>
  );
}
