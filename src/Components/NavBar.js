import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../src/111.png"

const NavBar = () => {
  return (
    <Navbar className="p-3" bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo} // Replace with the path to your logo image
          alt="Logo"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="title" as={Link} to="/">
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
