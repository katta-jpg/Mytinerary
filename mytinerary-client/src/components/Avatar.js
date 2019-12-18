import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaReact } from "react-icons/fa";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

class Avatar extends Component {
  render() {
    const isLoggedIn = this.props.isAuth;
    return (
      <div>
        {isLoggedIn ? (
          <div className="dropdown">
            <img
              src={this.props.user.profilePic}
              alt="profilePic"
              className="navbar-brand dropdown-toggle rounded-circle "
              style={{ height: "50px", width: "50px" }}
              data-toggle="dropdown"
            />
            <div className="dropdown-menu">
              <Link
                to="/"
                className="dropdown-item"
                onClick={this.props.logout}
              >
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
              <Link to="/login" className="dropdown-item">
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

const mapStateToProps = reducers => {
  return reducers.authReducer;
};
export default connect(
  mapStateToProps,
  { logout }
)(Avatar);
