import React, { Component } from "react";

class CityBanner extends Component {
  render() {
    return (
      <div>
        <img
          className="card-img-top"
          style={{
            filter: "brightness(50%)",
            height: "180px"
          }}
          src={this.props.city.img}
          alt=""
        ></img>
        <div className="card-img-overlay text-white text-center align-items-center justify-content-center ">
          <h4 className="card-title mt-5">{this.props.city.city}</h4>
          <p className="card-text">{this.props.city.country}</p>
        </div>
      </div>
    );
  }
}
export default CityBanner;
