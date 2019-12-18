import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <nav
          className="navbar navbar-expand-xl bg-info navbar-dark py-0"
          height="20px"
        >
          <Avatar />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse py-1" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
