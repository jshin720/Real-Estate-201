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

function Register() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Create Account</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form className="p-3">
            <FormGroup className="mb-3">
              <FormLabel>Username</FormLabel>
              <FormControl type="text" placeholder='Username' />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Email Address</FormLabel>
              <FormControl type="email" placeholder='Enter Email' />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" placeholder='Password' />
            </FormGroup>

            <Button variant="primary">Register</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/login">Already have an account?</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Register;