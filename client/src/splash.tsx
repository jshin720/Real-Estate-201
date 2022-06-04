import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./login";
import Register from "./register"
import './splash.css'
interface SplashProps {
    entryPoint: "login" | "register";
}
const Splash = ({ entryPoint }: SplashProps) => {
   
    return (
        <Container>
            <Row>
                <Col sm={12} md={6} id="bg-cover">
                   <h1>Real Estate 201</h1>
                </Col>
                <Col className="vh-100" sm={12} md={6}>
                    {entryPoint === 'login' ? <Login /> : <Register />}
                </Col>
            </Row>
        </Container>
    )
};
 
export default Splash;