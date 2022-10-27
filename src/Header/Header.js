import React from "react";
import "./Header.css";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useState } from "react";

const Header = () => {
  const { user, logOut, toggle } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user?.displayName || "login first"}
    </Tooltip>
  );

  const darkMode = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img
          style={{ width: "100px" }}
          src="https://dcassetcdn.com/design_img/1637488/517402/517402_8472867_1637488_2c5fbb56_image.jpg"
          alt=""
        />
        <Navbar.Brand href="/" className="text-warning ms-lg-3">
          Learn Program
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            {user?.uid ? (
              <>
                <Button
                  onClick={handleLogOut}
                  variant="primary"
                  className="ms-2"
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link className="ms-lg-2 mt-lg-2" to="/login">
                  Login
                </Link>
                <Link className="ms-lg-2 mt-lg-2" to="/register">
                  Register
                </Link>
              </>
            )}
            {user?.photoURL ? (
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 50, hide: 400 }}
                overlay={renderTooltip}
              >
                <Image
                  className="ms-lg-2 mt-lg-2"
                  style={{ height: "40px", width: "40px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 50, hide: 400 }}
                overlay={renderTooltip}
              >
                <FaUser className="text-success ms-lg-2 mt-lg-2 my-sm-3"></FaUser>
              </OverlayTrigger>
            )}
            { toggle?
                (
                  <>
                <Button onClick={darkMode} className="ms-lg-3" variant="dark">
                  Dark
                </Button>
                </>
                )
                :
                (
                <>
                <Button className="ms-lg-3" variant="light">
                  Light
                </Button>
                </>
                )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
