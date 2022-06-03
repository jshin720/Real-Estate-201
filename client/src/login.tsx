import React from 'react';
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Form className="">
            <FormGroup className="mb-3">
              <FormLabel>Email Address</FormLabel>
              <FormControl type="email" placeholder='Enter Email' />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" placeholder='Password' />
            </FormGroup>

            <Button variant="primary">Login</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/register">Don't have an account yet?</Link>
        </Col>
      </Row>
    </Container>

  )
}

export default Login;

