import React, { Component } from "react";
import { Link } from "react-router-dom";
import Arrow from "../img/circled-right-2.png";
import CarouselImg from "./Carousel";
import Header from "./header";

// Lo Comentado Pertenece al Primer Diseño
class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="text-center mt-4">
          <p>
            <b>
              Find your perfect trip, designed by insiders who know and love
              their cities
            </b>
          </p>
          <h3>Start Browsing</h3>
          <Link to="/cities">
            <img className="w-25 pb-5 mt-3" src={Arrow} alt="Arrow" />
          </Link>
          {/* <p className="mt-3">Want to build your own MYtinerary</p> */}
          <CarouselImg />
        </div>
        {/* <div className="d-flex justify-content-around">
          <Link to="/login">Log in</Link>
          <Link to="/createAcc">Create Account</Link>
        </div> */}
      </div>
    );
  }
}
export default Index;
