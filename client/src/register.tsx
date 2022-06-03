import React from 'react';
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button
} from 'react-bootstrap';



function Register() {
  return (
    <Form className="">
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
  )
}

export default Register;