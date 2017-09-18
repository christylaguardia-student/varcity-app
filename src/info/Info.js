import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import { getCountries, getRegions, getCities } from './location/actions';
import { TextInput, TextArea, NumberInput, DateInput, Toggle, ToggleEditMode, TextSelect, UrlInput } from '../app/FormControls';
import riekSportList from './riekSportsList';

// just do this for now
// eslint-disable-next-line
function httpCallback() { console.log('pretending to make api call');}
const value = '';

export class Info extends Component {

  constructor(props) {
    super(props);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.saveLocation = this.saveLocation.bind(this);
  }

  componentDidMount() {
    this.props.getCountries();
  }

  handleCountryChange(country) {
    console.log(country);
    // this.props.getRegions(country);
  }

  handleRegionChange(country, region) {
    this.props.getCities(country, region);
  }

  saveLocation() {
    // TODO: do this for country, region, city
    httpCallback();
  }

  render() {
    const heightUOM = [
      { id: 1, text: 'in' },
      { id: 2, text: 'cm' }
    ];
    
    const weightUOM = [
      { id: 1, text: 'lb' },
      { id: 2, text: 'kg' }
    ];

    return (
      <div className="field">
        <ToggleEditMode value="edit" propName="edit" change={httpCallback} disabled={false} /> 

        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <UrlInput value={value} propName="profileUrl" label="Image" placeholder="Profile Image URL" change={httpCallback} />
          </div>
          <div className="tile is-vertical">
            <TextInput value={value} propName="firstName" label="First Name" change={httpCallback} />
            <TextInput value={value} propName="lastName" label="Last Name" change={httpCallback} />
            <DateInput value={value} propName="dob" label="Birthday" change={httpCallback} />
            <Toggle value={value} propName="public" label="Public Profile?" change={httpCallback} />
            
            <TextSelect value={value} propName="primarySport" label="Primary Sport" options={riekSportList} change={httpCallback} /> 
            <TextInput value={value} propName="position" label="Position" change={httpCallback} />
            
            <TextInput value={value} propName="organization" label="School/Organization" change={httpCallback} />
            <TextSelect value={value} propName="country" label="Country" options={this.props.location.countries} change={this.handleCountryChange} /> 
            <TextSelect value={value} propName="region" label="State/Region" options={this.props.location.regions} change={() => this.handleRegionChange(this.value)} /> 
            <TextSelect value={value} propName="city" label="City" options={this.props.location.cities} change={this.saveLocation} /> 
            
            <div className="field body is-narrow is-grouped is-grouped-multiline">
              <NumberInput value={value} propName="height" label="Height" change={httpCallback}/>
              <TextSelect value={value} propName="heightUOM" label="(in/cm)" options={heightUOM} change={httpCallback} /> 
              <NumberInput value={value} propName="weight" label="Weight" change={httpCallback}/>
              <TextSelect value={value} propName="weightUOM" label="(lb/kg)" options={weightUOM} change={httpCallback} /> 
            </div>

            <div className="is-grouped is-grouped-multiline">
              <UrlInput value={value} propName="facebookUrl" label="Facebook" placeholder="Facebook URL (optional)" change={httpCallback} />
              <UrlInput value={value} propName="twitterUrl" label="Twitter" placeholder="Twitter URL (optional)" change={httpCallback} />
              <UrlInput value={value} propName="instagramUrl" label="Instagram" placeholder="Instagram URL (optional)" change={httpCallback} />
            </div>
          </div>
        </div>
        <div className="tile is-vertical">
          <TextArea value={value} propName="about" label="Bio" change={httpCallback} />
          <TextArea value={value} propName="awards" label="Awards" change={httpCallback} />
        </div>
      </div>
    );}
}

export default connect(state => {
  return {
    info: state.info,
    location: state.location
  };
}, { getCountries, getRegions, getCities })(Info);
