import React from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=> {})
    .catch(error=> console.error(error))
  }
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
            {
              user?.uid ?
              <>
                <Button onClick={handleLogOut} variant="primary" className="ms-2">Log out</Button>
                <span className="mt-lg-2 ms-lg-2">{user?.displayName}</span>
              </>
              :
              <>
                <Link className="ms-lg-2 mt-lg-2" to="/login">Login</Link>
                <Link className="ms-lg-2 mt-lg-2" to="/register">Register</Link>
              </>
            }
            {user?.photoURL ? (
                <Image className="ms-lg-2 mt-lg-2" 
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser className="ms-lg-2 mt-lg-2"></FaUser>
              )}
            <Button className="ms-lg-3" variant="dark">Dark</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
