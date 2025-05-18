import React from "react";
import Product from "./product";
import Row from "react-bootstrap/Row";
export default function Main(props) {
  const {products, add} = props;
  return( <div>
    <Row className="gap-4 justify-content-center">
    {products.map((product) =>(
      <Product key={product.id} product={product} add={add} />
    ))} 
    </Row>
  </div>
  );
}
