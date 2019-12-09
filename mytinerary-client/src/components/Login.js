import React, { Component } from "react";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <Container className="App mt-5">
        <h2 className="text-center" >Log In</h2>
        <Form className="form ml-3">
          <Col>
            <FormGroup className="w-100">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="w-100">
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <FormGroup className="ml-5">
        <Button className="ml-5 w-50 btn-danger">Submit</Button>
        </FormGroup>
        </Form>
      </Container>
    );
  }
}
export default Login;
