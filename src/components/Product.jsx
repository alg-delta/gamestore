import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Product({product , add}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}$</Card.Text>
        <Card.Text>{product.text}</Card.Text>
        <Button variant="success"onClick={()=> add(product)}>Купити</Button>
      </Card.Body>
    </Card>
  );
}
