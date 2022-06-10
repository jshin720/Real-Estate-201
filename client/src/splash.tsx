import React from "react";
import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import './splash.css'

const Splash = () => {

    return (
        <Container className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center" id="bg-cover" fluid>
            <h1 className="display-1">Find Your New Abode</h1>
            <h3>Connecting people and their future homes.</h3>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success"></Button>
            </Form>
        </Container>
    )
};

export default Splash;