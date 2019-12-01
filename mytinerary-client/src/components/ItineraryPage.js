import React, { Component } from "react";
import CityBanner from "./CityBanner";
import ItineraryCard from "./ItineraryCard";
import { connect } from "react-redux";
import { getItinerarys } from "../actions/itineraryFetch";
import { getCitys } from "../actions/cityFetch";
import Footer from "./footer";

class Itinerary extends Component {
  renderItinerarys() {
    const itinerarys = this.props.itineraryReducer.itinerarys;
    const citys = this.props.cityReducer.citys;
    var cityArr = [];
    if (citys.length) {
      cityArr = citys.filter((array, index) => {
        if (array.city === this.props.match.params.city) {
          return array;
        }
        return false;
      });
    }
    return itinerarys.length !== 0 ? (
      <div>
        <div className="container">
          {cityArr ? <CityBanner city={cityArr[0]} /> : ""}
        </div>
        <ul className="list-group">
          {itinerarys.map((itinerary, index) => (
            <ItineraryCard itinerary={itinerary} index={index} key={index} />
          ))}
        </ul>
      </div>
    ) : (
      ""
    );
  }
  componentDidMount() {
    const city = this.props.match.params.city;
    if (!this.props.cityReducer.citys.length) {
      this.props.getCitys();
    }
    this.props.getItinerarys(city);
  }
  render() {
    return (
      <div>
        <div className="pb-5 mb-5">
          {this.props.itineraryReducer.loading &&
          this.props.cityReducer.loading ? (
            <h3>Cargando</h3>
          ) : this.props.itineraryReducer.error ? (
            <h3>{this.props.itineraryReducer.error}</h3>
          ) : this.props.itineraryReducer.itinerarys.length ? (
            this.renderItinerarys()
          ) : (
            <h3>No Hay Itinerarios para esa Ciudad</h3>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = {
  getItinerarys,
  getCitys
};
const mapStateToProps = ({ itineraryReducer, cityReducer }) => {
  return { itineraryReducer, cityReducer };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Itinerary);
