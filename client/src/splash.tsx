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
        <Container className="vw-100 vh-100">
            <Row className="v-100 h-100">
                <Col sm={12} md={6} id="bg-cover" className="d-flex flex-column justify-content-center align-items-center">
                   <h1>Real Estate 201</h1>
                   <p>Connecting people and their future homes</p>
                </Col>
                <Col className="h-100 d-flex align-items-center justify-content-center" sm={12} md={6}>
                    {entryPoint === 'login' ? <Login /> : <Register />}
                </Col>
            </Row>
        </Container>
    )
};
 
export default Splash;