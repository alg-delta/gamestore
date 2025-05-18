import React from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Product from "./product";
export default function Cart({cartItems , add , remove , buy}) {
  
  const totalPrice = cartItems.reduce(
    (sum , product) => sum + product.price * product . number,
    0
  );
  return (
    <Alert variant="success" >
      <Alert.Heading>Кеш</Alert.Heading>
 {cartItems.length === 0 && <p>Порожня Корзина</p>} 
 <table width="100%"> 
   <tr>
    <td width="25%">назва</td>
    <td width="25%">кількість</td>
    <td width="25%">ціна</td>
    <td width="25%">сумма</td>
  </tr>
  {cartItems.map(product=>
    <tr key={product.id}>
    <td width="25%">{product.name}</td>
    <td width="25%">
      <Button variant = "danger" onClick={()=> remove(product)}>-</Button>
      {product.number}
      <Button variant = "success" onClick={()=> add(product)}>+</Button>
      </td>
    <td width="25%">{product.price}$</td>
    <td width="25%">{product.price*product.number}</td>
  </tr>

  )}
  </table>    
      <hr />
      <p className="mb-0">
        Насолождуйтесь іграми , котрі ми продаємо для вас , але є одне правило не копіюйте гру , і не переосьте на інший комп'ютер (не Піратствуйте)
      </p>
      <p className="mb-0">Сума до сплати {totalPrice}$</p>
      <Button onClick={buy} variant="success" disabled={cartItems.length === 0}>купити</Button>
    </Alert>
  );
}