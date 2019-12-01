import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import { connect } from "react-redux";
import { getCitys } from "../actions/cityFetch";
import CityBanner from "./CityBanner";
class Cities extends Component {
  constructor() {
    super();
    this.state = {
      filter: ""
    };
  }

  updateFilter(event) {
    const e = event.target.value;
    setTimeout(() => {
      this.setState({
        filter: e.substr(0, 20)
      });
    }, 300);
  }

  searchCities(citys) {
    return citys.filter(city => {
      return (
        city.city.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
      );
    });
  }
  renderCitys(filteredCitys) {
    return filteredCitys.length !== 0 ? (
      filteredCitys.map(city => (
        <li className="card d-flex" key={city._id}>
          <Link
            to={{
              pathname: `/itinerary/${city.city}`
            }}
          >
            <CityBanner city={city} />
          </Link>
        </li>
      ))
    ) : (
      <h3>No Hay Ciudades con ese Criterio</h3>
    );
  }
  componentDidMount() {
    const citys = this.props.citys;
    if (!citys.length) {
      this.props.getCitys();
    }
  }
  render() {
    let filteredCitys = this.searchCities(this.props.citys);
    return (
      <div className="container mt-2">
        <Header />
        <input
          type="text"
          placeholder="Filter by City"
          className="mb-2"
          value={this.state.search}
          onChange={this.updateFilter.bind(this)}
        />
        {this.props.loading ? (
          <h3>Cargando</h3>
        ) : this.props.error ? (
          <h3>{this.props.error}</h3>
        ) : this.props.citys ? (
          this.renderCitys(filteredCitys)
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = reducers => {
  return reducers.cityReducer;
};
export default connect(
  mapStateToProps,
  { getCitys }
)(Cities);
