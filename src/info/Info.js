import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInfo } from '../store/athletes/actions';
import { getCountries, getRegions, getCities } from './address/actions';
import { TextInput, TextArea, NumberInput, DateInput, Toggle, TextSelect, UrlInput } from '../app/FormControls';
import sports from '../utils/sports';

import defaultValues from '../store/athletes/defaultValues';

export class Info extends Component {

  componentDidMount() {
    // const id = this.props.location.pathname.split('/athletes/')[1];
    // console.log('id', id);
    const id = '59c07c3dee27d1b10998f54b';
    this.props.getInfo(id);
    this.props.getCountries();
  }

  render() {
    // const { info, bio } = this.props.athletes._id;
    const { info, bio } = defaultValues._id;
    const disabled = false;
    function onChange(value) { console.log('was changed to ', value); }
    const fakeOptions=[{id:1,text:'pickone'},{id:2,text:'pickone'},{id:3,text:'pickone'}];
    const heightUOM = [{ id: 1, text: 'in' }, { id: 2, text: 'cm' }];
    const weightUOM = [{ id: 1, text: 'lb' }, { id: 2, text: 'kg' }];

    return (
      <div className="column">
        <div>
          <p>
            <span><icon className="fa fa-check fa-lg" /></span>
            <span><icon className="fa fa-pencil fa-lg" /></span>
          </p>
        </div>

        <div className="tile is-ancestor">

          <div className="tile is-vertical">
            <UrlInput value={info.profileUrl} propName="profileUrl" label="Image" change={onChange} disabled={disabled} />
          </div>
          
          <div className="tile is-vertical">
            <TextInput value={info.firstName} propName="firstName" label="First Name" change={onChange} disabled={disabled} />
            <TextInput value={info.lastName} propName="lastName" label="Last Name" change={onChange} disabled={disabled} />  
            <Toggle value={info.public} propName="public" label="Public Profile?" change={onChange} disabled={disabled} />
            {/* <DateInput value={info.person.dob} propName="dob" label="Birthday" change={onChange} disabled={disabled} /> */}
            <TextSelect value={info.primarySport} propName="primarySport" label="Primary Sport" options={sports} change={onChange} disabled={disabled} />
            <TextInput value={info.position} propName="position" label="Position" change={onChange} disabled={disabled} />
            <TextInput value={info.organization} propName="organization" label="School/Organization" change={onChange} disabled={disabled} />
            <TextSelect value={info.location.country} propName="country" label="Country" options={fakeOptions} change={onChange} disabled={disabled} />
            <TextSelect value={info.location.state} propName="region" label="State/Region" options={fakeOptions} change={onChange} disabled={disabled} /> 
            <TextSelect value={info.location.city} propName="city" label="City" options={fakeOptions} change={onChange} disabled={disabled} /> 
          </div>

          <div className="field body is-narrow is-grouped is-grouped-multiline">
            <NumberInput value={info.person.height} propName="height" label="Height" change={onChange} disabled={disabled} />
            <TextSelect value={info.person.heightUom} propName="heightUOM" label="(in/cm)" options={heightUOM} change={onChange} disabled={disabled} />
            <NumberInput value={info.person.weight} propName="weight" label="Weight" change={onChange} disabled={disabled} />
            <TextSelect value={info.person.weightUom} propName="weightUOM" label="(lb/kg)" options={weightUOM} change={onChange} disabled={disabled} />
          </div>

          <div className="is-grouped is-grouped-multiline">
            <UrlInput value={info.socials.facebookUrl} propName="facebookUrl" label="Facebook" change={onChange} disabled={disabled} />
            <UrlInput value={info.socials.twitterUrl} propName="twitterUrl" label="Twitter" change={onChange} disabled={disabled} />
            <UrlInput value={info.socials.instagramUrl} propName="instagramUrl" label="Instagram" change={onChange} disabled={disabled} />
          </div>
        </div>
        <div className="tile is-vertical">
          <TextArea value={bio.about} propName="about" label="Bio" change={onChange} disabled={disabled} />
          <TextArea value={bio.awards} propName="awards" label="Awards" change={onChange} disabled={disabled} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: (id) => {
      dispatch(getInfo(id));
    },
    getCountries: () => {
      dispatch(getCountries());
    },
    getRegions: (country) => {
      dispatch(getRegions(country));
    },
    getCities: (country, region) => {
      dispatch(getCities(country, region));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    athletes: state.athletes,
    address: state.address,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
