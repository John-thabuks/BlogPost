import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);

  const handleNavClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" >            
            <Image src={"https://logo.com/image-cdn/images/kts928pd/production/d12dfdbd6b7501faf694ac42775f19451aee8805-324x328.png?w=1080&q=72"} roundedCircle alt="Logo" style={{height: "5%", width: "5%", marginRight:"1%"}}/>
            Thabuks 
          </Navbar.Brand>
          <Nav className="me-auto" onClick={handleNavClick} style={{marginLeft:"-30%"}}>
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
