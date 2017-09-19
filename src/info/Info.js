import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import { getRegions, getCities } from './address/actions';
import { TextInput, TextArea, NumberInput, DateInput, Toggle, ToggleEditMode, TextSelect, UrlInput } from '../app/FormControls';
import riekSportList from './riekSportsList';

export class Info extends Component {

  render() {
    const { info, bio } = this.props.athletes;
    const heightUOM = [{ id: 1, text: 'in' }, { id: 2, text: 'cm' }];
    const weightUOM = [{ id: 1, text: 'lb' }, { id: 2, text: 'kg' }];

    return (
      <div className="column is-mobile field">
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <UrlInput prop={info.profileUrl} name="profileUrl" label="Image" placeholder="Profile Image URL" />
          </div>
          <div className="tile is-vertical">
            <TextInput prop={info.firstName} name="firstName" label="First Name" />
            <TextInput prop={info.lastName} name="lastName" label="Last Name" />
            {/* <DateInput prop={info.dob} name="dob" label="Birthday" /> */}
            <Toggle prop={info.public} name="public" label="Public Profile?" />
            <TextSelect prop={info.primarySport} name="primarySport" label="Primary Sport" options={riekSportList} />
            <TextInput prop={info.position} name="position" label="Position" />
            <TextInput prop={info.organization} name="organization" label="School/Organization" />
            {/* <TextSelect prop={this.props.address.countries} name="country" label="Country" options={this.props.address.countries} />  */}
            {/* <TextSelect prop={value} name="region" label="State/Region" options={this.props.address.regions} change={() => this.handleRegionChange(this.value)} disabled={disabled} />  */}
            {/* <TextSelect prop={value} name="city" label="City" options={this.props.address.cities} change={this.saveAddress} disabled={disabled} />  */}
           
            <div className="field body is-narrow is-grouped is-grouped-multiline">
              {/* <NumberInput prop={info.height} name="height" label="Height" /> */}
              {/* <TextSelect prop={'info.heightUOM'} name="heightUOM" label="(in/cm)" options={heightUOM} /> */}
              {/* <NumberInput prop={info.weight} name="weight" label="Weight" change={httpCallback}disabled={disabled} /> */}
              {/* <TextSelect prop={info.weightUOM} name="weightUOM" label="(lb/kg)" options={weightUOM} /> */}
            </div>

            <div className="is-grouped is-grouped-multiline">
              {/* <UrlInput prop={info.facebookUrl} name="facebookUrl" label="Facebook" placeholder="Facebook URL (optional)" />
              <UrlInput prop={info.twitterUrl} name="twitterUrl" label="Twitter" placeholder="Twitter URL (optional)" />
              <UrlInput prop={info.instagramUrl} name="instagramUrl" label="Instagram" placeholder="Instagram URL (optional)" /> */}
            </div>
          </div>
        </div>
        <div className="tile is-vertical">
          <TextArea prop={bio.about} name="about" label="Bio" />
          <TextArea prop={bio.awards} name="awards" label="Awards" />
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