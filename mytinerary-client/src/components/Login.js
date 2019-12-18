import React, { Component } from "react";
import GooglePush from "./GooglePush";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../actions/errorActions";
import { login } from "../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      msg: null
    };
  }

  static propTypes = {
    isAuth: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    this.props.login(user, this.props);
    this.props.clearErrors();
  };

  render() {
    return (
      <Container className="App mt-5">
        <h2 className="text-center">Log In</h2>
        <Col>
          {this.state.msg ? (
            <Alert className="mb-3 mt-3 ml-2 text-center" color="danger">
              {this.state.msg}
            </Alert>
          ) : null}
        </Col>
        <Form onSubmit={this.onSubmit} className="form">
          <Col>
            <FormGroup className="w-100">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                onChange={this.onChange.bind(this)}
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
                onChange={this.onChange.bind(this)}
              />
            </FormGroup>
          </Col>
          <FormGroup className="ml-4 mr-4">
            <Button className="w-100 btn-info">Submit</Button>
          </FormGroup>
        </Form>
        <GooglePush />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  error: state.errorReducer
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(Login);
