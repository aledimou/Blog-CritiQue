import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap";

function Menu(){
    return (
    <Navbar bg="dark" variant="dark">
        <Container fluid>
        <Navbar.Brand href="#home">CritiQue</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
  </Navbar>
    )
}

export default Menu;