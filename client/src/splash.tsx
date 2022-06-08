import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './splash.css'

const Splash = () => {
   
    return (
        <Container className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center" id="bg-cover" fluid>
                <h1 className="display-1">Find Your New Abode</h1>
                <h3>Connecting people and their future homes.</h3>
        </Container>
    )
};
 
export default Splash;