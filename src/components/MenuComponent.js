import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom"


const LinkStyle = {
    margin: "10px 9px",
    textDecoration: "none",
    color: "#F6F6F6",
    fontSize:"1.1rem"
}

function Menu(){
    return (
    <Navbar bg="dark" variant="dark">
        <Container fluid>
        <Navbar.Brand href="#home">CritiQueBlog</Navbar.Brand>
        <Nav className="me-auto">
        <Link style={LinkStyle} to= "/">Home</Link>
        <Link style={LinkStyle} to ="/Movies"> Movies</Link>
        <Link style={LinkStyle} to="/Cars">Cars</Link>
        <Link style={LinkStyle} to="/Animals">Animals</Link>
        </Nav>
        </Container>
  </Navbar>
    )
}

export default Menu;