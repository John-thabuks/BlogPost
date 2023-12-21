import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

function Header() {
  const [show, setShow] = useState(false);

  const handleNavClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">            
            <img src={process.env.PUBLIC_URL + '/images/logo.JPG'} roundedCircle alt="Logo" style={{height: "10%", width: "10%"}}/>
            Thabuks 
          </Navbar.Brand>
          <Nav className="me-auto" onClick={handleNavClick}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/addBlog">Add Blog</Nav.Link>            
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
