import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './splash.css'

const Splash = () => {
   
    return (
        <Container className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center" id="bg-cover" fluid>
                <h1>Real Estate 201</h1>
                <p>Connecting people and their future homes</p>
        </Container>
    )
};
 
export default Splash;