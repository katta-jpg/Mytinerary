import React, { Component } from "react";
import logo from "../img/MYtineraryLogo.png";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header>
          <img
            className="col-sm-12 w-100 mt-3 p-0 w-25 h-25"
            src={logo}
            alt="logo"
          />
        </header>
      </div>
    );
  }
}
export default Header;
