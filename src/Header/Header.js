import React from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img style={{width: '100px'} } src="https://dcassetcdn.com/design_img/1637488/517402/517402_8472867_1637488_2c5fbb56_image.jpg" alt="" />
        <Navbar.Brand href="/" className="text-warning ms-lg-3">Learn Program</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Link className="ms-lg-2 mt-lg-2" to="/login">Login</Link>
            <Link className="ms-lg-2 mt-lg-2" to="/register">Register</Link>
            <Button className="ms-lg-3" variant="dark">Dark</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
