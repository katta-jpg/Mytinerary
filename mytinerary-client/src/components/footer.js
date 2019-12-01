import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosHome } from "react-icons/io";

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid d-flex text-center fixed-bottom mb-0 pb-0 bg-light justify-content-around">
        <Link to="/cities">
          <IoIosArrowBack
            className="col-sm-4 mb-0 pb-0"
            style={{ height: "70px", width: "70px", color: "black" }}
          />
        </Link>
        <Link to="/">
          <IoIosHome
            className="col-sm-4 mb-0 pb-0"
            style={{ height: "70px", width: "70px", color: "black" }}
          />
        </Link>
        <div>{""}</div>
        <div>{""}</div>
      </footer>
    );
  }
}
export default Footer;
