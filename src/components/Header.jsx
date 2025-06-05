import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header() {
  return (
    <div>
      <Navbar data-bs-theme="dark" style={{ backgroundColor: "black" }}>
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Магазин ігор
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/">
              Головна сторінка
            </Nav.Link>
            <Nav.Link as={NavLink} to="/info">
              Інформація
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Discounts">
              Знижки
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/account replenishment">Поповнення рахунку</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
