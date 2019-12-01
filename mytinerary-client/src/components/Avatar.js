import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaReact } from "react-icons/fa";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.LoginClick = this.LoginClick.bind(this);
    this.LogoutClick = this.LogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  LoginClick() {
    this.setState({ isLoggedIn: true });
  }
  LogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? (
          <div className="dropdown">
            <FaReact
              className="navbar-brand dropdown-toggle"
              style={{ height: "50px", width: "50px" }}
              data-toggle="dropdown"
            />
            <div className="dropdown-menu">
              <Link to="/" className="dropdown-item" onClick={this.LogoutClick}>
                Log Out
              </Link>
            </div>
          </div>
        ) : (
          <div className="dropdown">
            <FaRegUserCircle
              className="navbar-brand dropdown-toggle"
              style={{ height: "50px", width: "50px" }}
              data-toggle="dropdown"
            />
            <div
              className="dropdown-menu"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link
                to="/login"
                className="dropdown-item"
                onClick={this.LoginClick}
              >
                Log In
              </Link>
              <Link to="/createAcc" className="dropdown-item">
                Create Account
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Avatar;
