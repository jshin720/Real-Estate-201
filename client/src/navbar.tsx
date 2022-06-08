import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const AppNavBar = () => {
    return (
        <Navbar expand="lg" bg="light">
            <Container fluid>
                <Navbar.Brand href="/">Real Estate 201</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">About</Nav.Link>
                        <NavDropdown title="Listings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Apartments</NavDropdown.Item>
                            <NavDropdown.Item href="#">Condominiums</NavDropdown.Item>
                            <NavDropdown.Item href="#">Homes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">All</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/#/login">Login</Nav.Link>
                        <Nav.Link href="/#/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default AppNavBar