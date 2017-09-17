import React, { Component } from 'react';
import { RIESelect } from 'riek';
import { getCountries, getStates, getCities } from '../services/location/geodata';
// import geodata from '../services/location/geodata';

export default class SelectLocation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCountry: 'United States',
      countries: [],
      selectedRegion: 'Oregon',
      regions: [],
      selectedCity: 'Portland',
      cities: [],
    };

    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  componentDidMount() {
    // getCountries().then(countries => this.setState({ countries }));
  }

  handleCountryChange() {
    // console.log('country changed', selectedCountry);
    // this.setState({ selectedCountry });
  }

  handleRegionChange() {

  }

  handleCityChange() {

  }

  render() {
    return (
      <div>
        <label className="label is-mobile">Location: </label>
        <RIESelect
          value={this.state.selectedCountry}
          propName="selectedCountry"
          change={this.handleCountryChange}
          className="select is-mobile"
          options={this.state.countries} />
        <RIESelect
          value={this.state.selectedRegion}
          propName="selectedRegion"
          change={this.handleRegionChange}
          className="select is-mobile"
          options={this.state.regions} />
        <RIESelect
          value={this.state.selectedCity}
          propName="selectedCity"
          change={this.handleCityChange}
          className="select is-mobile"
          options={this.state.cities} />
      </div>
    )}
}
