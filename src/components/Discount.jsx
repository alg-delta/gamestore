import React from "react";
import Button from "react-bootstrap/esm/Button";
import data from "../data";
import Product from "./Product";
import { useState } from "react";
export default function Discount(props) {
  const { add } = props;
  const [znuchka, setZnuchka] = useState(-1);
  const getDiscount = () => {
    let random = Math.floor(Math.random() * (5 - 0) + 0);
    console.log(random);
    setZnuchka(data.find((item) => item.id === random));
    setZnuchka((znuchka) => ({
      ...znuchka,
      price: Math.floor(znuchka.price * 0.8),
    }));
  };

  return (
    <>
      <Button className="t" onClick={getDiscount} variant="warning">
        Отримати знижку
      </Button>
      {znuchka !== -1 && <Product product={znuchka} add={add} />}
    </>
  );
}
