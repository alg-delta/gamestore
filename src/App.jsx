import "./App.css";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Header from "./components/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./data";
import Info from "./components/Info";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discount from "./components/Discount";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const add = (product) => {
    // Знаходимо чи є товар в корзині по id
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      // Якщо товар вже є в корзині, то змінюємо його кількість number+1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      // Якщо товару ще немає в корзині, то додаємо його та ставимо кількість number: 1
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };

  const remove = (product) => {
    // Знаходимо чи є товар в корзині по id
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      // Якщо товар вже є в корзині, то змінюємо його кількість number+1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      // Якщо товару ще немає в корзині, то додаємо його та ставимо кількість number: 1
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  const buy = () => {
    setCartItems([]);
    alert("Ваше замовлення прийняте");
  };

  return (
    <div className="App">
      <BrowserRouter basename="/gamestore/">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Row>
                <Main products={data} add={add} />

                <Cart
                  cartItems={cartItems}
                  add={add}
                  remove={remove}
                  buy={buy}
                />
              </Row>
            }
          />
          <Route path="/info" element={<Info />} />
          <Route path="/Discounts" element={<Discount add={add} />} />
          <Route path="/account replenishment" element={<p></p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
