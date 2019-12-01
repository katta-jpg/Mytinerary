import React, { Component } from "react";
import ActivitySlider from "./ActivitySlider";
import Comments from "./Comments";

class ItineraryCard extends Component {
  constructor() {
    super();
    this.state = {
      expand: false,
      text: "Mostrar Mas"
    };
  }
  changeText() {
    this.state.expand === false
      ? this.setState({
          expand: true,
          text: "Mostrar Menos"
        })
      : this.setState({
          expand: false,
          text: "Mostrar Mas"
        });
  }
  render() {
    const itinerary = this.props.itinerary;
    if (itinerary) {
      return (
        <li className="list-group-item border-0" key={this.props.index + "li"}>
          <div
            className="media border-top border-left border-right p-3"
            key={this.props.index + "div"}
          >
            <img
              src={itinerary.profilePic}
              alt={itinerary.title}
              className="mr-3 rounded-circle"
              style={{ width: "60px", height: "65px" }}
            />
            <div
              className="text-center media-body"
              key={this.props.index + "div2"}
            >
              <h4>{itinerary.title}</h4>
              <div className="d-flex justify-content-between">
                <small>Likes: {itinerary.rating}</small>
                <small>Duracion: {itinerary.duration}</small>
                <small>Precio: {itinerary.price}</small>
              </div>
              <div key={this.props.index + "tag"}>
                {itinerary.hashtag.map((tag, inde) => (
                  <small key={inde}> {tag} </small>
                ))}{" "}
              </div>
            </div>
          </div>
          <div
            id={"g" + itinerary._id}
            className="border-left border-right border-bottom collapse"
          >
            <h5 className="ml-3">Activities</h5>
            <ActivitySlider
              itineraryId={itinerary._id}
              key={`slider${itinerary._id}`}
            />
            <Comments />
          </div>
          <button
            data-toggle="collapse"
            data-target={`#g${itinerary._id}`}
            className="w-100 bg-light fixed"
            onClick={this.changeText.bind(this)}
          >
            {this.state.text}
          </button>
        </li>
      );
    } else {
      return false;
    }
  }
}
export default ItineraryCard;
