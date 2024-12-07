import { useEffect, useState } from "react";
import { Layout, Container, Counter } from "components";
import "./ShoppingCart.css";

function XIcon({ w = 10, h = 10, onClick }) {
  return (
    <div className="x-icon" style={{ width: w, height: h }} onClick={onClick}>
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
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

export default function ShoppingCart() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(sessionStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const clearCart = () => {
    sessionStorage.removeItem("orders");
    setOrders([]);
  };

  const removeItem = (index) => {
    let updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    sessionStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  const calculateTotal = () => {
    return orders
      .reduce((total, order) => total + order.totalOrderPrice, 0)
      .toLocaleString();
  };

  return (
    <Layout>
      <Container>
        <div className="ShoppingCart">
          <h1>장바구니</h1>
          <div className="cart-table">
            <div className="header">주문내역</div>
            <div className="thead">
              <div className="th title">상품정보</div>
              <div className="th topping">추가토핑</div>
              <div className="th count">수량</div>
              <div className="th price">금액</div>
              <div className="th delete"></div>
            </div>
            <div className="tbody">
              {orders.map((order, index) => (
                <div className="tr" key={index}>
                  <div className="td title">
                    <div className="thumb">
                      <img
                        src="https://cdn.dominos.co.kr/admin/upload/goods/20240326_Sby1plV9.jpg"
                        width="100%"
                        height="100%"
                        alt={order.pizza.name}
                      />
                    </div>
                    <div className="info">
                      <div>
                        <strong>{order.pizza.name}</strong>
                      </div>
                      <div>{order.pizza.pricePerUnit}원</div>
                    </div>
                  </div>
                  <div className="td topping">
                    {order.toppings.map((topping, tIndex) => (
                      <div className="item" key={tIndex}>
                        <span>
                          {topping.name} ({topping.count})
                        </span>
                        <span onClick={() => removeItem(tIndex)}>
                          <XIcon w={10} h={10} />
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="td count">
                    <Counter count={order.pizza.count} />
                  </div>
                  <div className="td price">
                    {order.totalOrderPrice.toLocaleString()}원
                  </div>
                  <div className="td delete">
                    <XIcon w={20} h={20} onClick={() => removeItem(index)} />
                  </div>
                </div>
              ))}
            </div>
            <div className="footer">
              주문금액 <span className="price">{calculateTotal()}원</span>
            </div>
          </div>
          <div className="buttons">
            <button className="clear" onClick={clearCart}>
              장바구니 비우기
            </button>
            <button className="order">주문하기</button>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
