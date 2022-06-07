import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppNavBar = () => {
    return (
        <Navbar expand="lg" bg="light">
            <Container fluid>
                <Navbar.Brand href="/">Real Estate 201</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Listings</Nav.Link>
                        <Nav.Link href="/#/login">Login</Nav.Link>
                        <Nav.Link href="/#/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default AppNavBar