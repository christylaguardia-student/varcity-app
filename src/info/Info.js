import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import { getRegions, getCities } from './address/actions';
import { TextInput, TextArea, NumberInput, DateInput, Toggle, ToggleEditMode, TextSelect, UrlInput } from '../app/FormControls';
import riekSportList from './riekSportsList';

// just do this for now
// eslint-disable-next-line
function httpCallback() { console.log('pretending to make api call');}
const value = '';
const disabled = false;

export class Info extends Component {

  handleCountryChange(country) {
    console.log(country);
  // this.props.getRegions(country);
  }

  // handleRegionChange(country, region) {
  // this.props.getCities(country, region);
  // }

  // saveAddress() {
  // TODO: do this for country, region, city
  // httpCallback();
  // }

  render() {
    const heightUOM = [{ id: 1, text: 'in' }, { id: 2, text: 'cm' }];
    const weightUOM = [{ id: 1, text: 'lb' }, { id: 2, text: 'kg' }];
    const { info } = this.props.athletes;

    return (
      <div className="column is-mobile field">
        <ToggleEditMode value="edit" propName="edit" change={httpCallback} disabled={disabled} /> 

        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <UrlInput value={info.profileUrl} propName="profileUrl" label="Image" placeholder="Profile Image URL" change={httpCallback} disabled={disabled} />
          </div>
          <div className="tile is-vertical">
            <TextInput value={info.firstName} propName="firstName" label="First Name" change={httpCallback} disabled={disabled} />
            <TextInput value={info.lastName} propName="lastName" label="Last Name" change={httpCallback} disabled={disabled} />
            <DateInput value={value} propName="dob" label="Birthday" change={httpCallback} disabled={disabled} />
            <Toggle value={value} propName="public" label="Public Profile?" change={httpCallback} disabled={disabled} />

            <TextSelect value={value} propName="primarySport" label="Primary Sport" options={riekSportList} change={httpCallback} disabled={disabled} />
            <TextInput value={value} propName="position" label="Position" change={httpCallback} disabled={disabled} />

            <TextInput value={value} propName="organization" label="School/Organization" change={httpCallback} disabled={disabled} />

            <TextSelect value={value} propName="country" label="Country" options={this.props.address.countries} change={this.handleCountryChange} disabled={disabled} /> 
            {/* <TextSelect value={value} propName="region" label="State/Region" options={this.props.address.regions} change={() => this.handleRegionChange(this.value)} disabled={disabled} /> 
            <TextSelect value={value} propName="city" label="City" options={this.props.address.cities} change={this.saveAddress} disabled={disabled} />  */}
           
            <div className="field body is-narrow is-grouped is-grouped-multiline">
              <NumberInput value={value} propName="height" label="Height" change={httpCallback}disabled={disabled} />
              <TextSelect value={value} propName="heightUOM" label="(in/cm)" options={heightUOM} change={httpCallback} disabled={disabled} />
              <NumberInput value={value} propName="weight" label="Weight" change={httpCallback}disabled={disabled} />
              <TextSelect value={value} propName="weightUOM" label="(lb/kg)" options={weightUOM} change={httpCallback} disabled={disabled} />
            </div>

            <div className="is-grouped is-grouped-multiline">
              <UrlInput value={value} propName="facebookUrl" label="Facebook" placeholder="Facebook URL (optional)" change={httpCallback} disabled={disabled} />
              <UrlInput value={value} propName="twitterUrl" label="Twitter" placeholder="Twitter URL (optional)" change={httpCallback} disabled={disabled} />
              <UrlInput value={value} propName="instagramUrl" label="Instagram" placeholder="Instagram URL (optional)" change={httpCallback} disabled={disabled} />
            </div>
          </div>
        </div>
        <div className="tile is-vertical">
          <TextArea value={value} propName="about" label="Bio" change={httpCallback} disabled={disabled} />
          <TextArea value={value} propName="awards" label="Awards" change={httpCallback} disabled={disabled} />
        </div>
      </div>
    );}
}

function mapDispatchToProps(dispatch) {
  return {
    getRegions: (country) => {
      dispatch(getRegions(country));
    },
    getCities: (country, region) => {
      dispatch(getCities(country, region));
    }
    
  };
}

const mapStateToProps = (state) => {
  return {
    athletes: state.athletes,
    address: state.address
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);