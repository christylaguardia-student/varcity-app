import React, { Component } from 'react';
import { RIEInput, RIEToggle, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';
import 'bulma/css/bulma.css';
import SelectLocation from './SelectLocation';
import riekSportList from './riekSportsList';
import { getCountries, getStates, getCities } from '../services/location/geodata';

class BasicInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      countries: ['United States', 'Mexico', 'Canada'],
      regions: [],
      cities: [],
    }
  }

  componentDidMount() {
    let riek = [];

    getCountries()
      .then(countries => {
        console.log(countries);
        this.setState({ countries });
      });
  }

  stringInput(labelText, propName) {
    return (
      <label className="label">
        labelText
        <RIEInput
          value={value}
          change={httpCallback}
          propName={propName}
          placeholder={labelText}
          className="input"
          validate={_.isString}/>
      </label>
    )
  } 

  render() {

    return (
      <div className="field">
        <label className="label">
          First Name
          <RIEInput
            value={value}
            change={httpCallback}
            propName="firstName"
            placeholder="First Name (required)"
            className="input"
            validate={_.isString}/>
        </label>

        <label className="label">
          Last Name
          <RIEInput
            value={value}
            change={httpCallback}
            propName="lastName"
            placeholder="Last Name (required)"
            className="input"
            validate={_.isString}/>
        </label>

        <label className="label">
          Public?
          <RIEToggle
            value={value}
            change={httpCallback}
            propName="public"
            textTrue="Public"
            textFalse="Private"
            className="input"
            validate={_.isString}/>
        </label>

        <label className="file-label">
          Profile Picture
          <RIEInput
            type="file"
            value={value}
            change={httpCallback}
            propName="profileUrl"
            placeholder="Profile Image URL"
            className="file-input"
            validate={_.isString}/>
        </label>

        <label className="label">
          Primary Sport
          <RIESelect
            value={value}
            change={httpCallback}
            propName="primarySport"
            options={riekSportList}
            className="input"
            validate={_.isString}/>
        </label>

        <label className="label">
          Position
          <RIEInput
            value={value}
            change={httpCallback}
            propName="position"
            placeholder="Position"
            className="input"
            validate={_.isString}/>
        </label>

        <label className="label">
          DOB
          <RIEInput
            type="date"
            value={value}
            change={httpCallback}
            propName="dob"
            placeholder="Birthday"
            className="input"
            validate={_.isDate}/>
        </label>

        <label className="label">
          Height (in)
          <RIENumber
            value={value}
            change={httpCallback}
            propName="height"
            placeholder="Height"
            className="input"
            validate={_.isNumber}/>
        </label>

        <label className="label">
          Weight (lb)
          <RIENumber
            value={value}
            change={httpCallback}
            propName="weight"
            placeholder="Weight"
            className="input"
            validate={_.isNumber}/>
        </label>

        <label className="label">
          School/Organization
          <RIEInput
            value={value}
            change={httpCallback}
            propName="organization"
            placeholder="School or Organization Name"
            className="input"
            validate={_.isString}/>
        </label>

        <label className="label">
          Country
          <RIESelect
            value={value}
            propName="country"
            change={httpCallback}
            className="select"
            options={this.state.countries} />
        </label>

        <label className="label">
          Facebook
          <RIEInput
            value={value}
            change={httpCallback}
            propName="facebookUrl"
            placeholder="Facebook URL (optional)"
            className="input"
            validate={_.isString}/>
        </label>

        <label className="label">
          Twitter
          <RIEInput
            value={value}
            change={httpCallback}
            propName="twitterUrl"
            placeholder="Twitter URL (optional)"
            className="input"
            validate={_.isString}/>
        </label>

        <label className="label">
          Instagram
          <RIEInput
            value={value}
            change={httpCallback}
            propName="instagramUrl"
            placeholder="Instagram URL (optional)"
            className="input"
            validate={_.isString}/>
        </label>
      </div>

  )}
}

// just do this for now
function httpCallback(value) {
  console.log(value, 'pretending to make an api call');
}

// come from props
const value = '';

export default BasicInfo;
