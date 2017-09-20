import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import { getInfo } from '../store/athletes/actions';
import { getCountries, getRegions, getCities } from './address/actions';
import { TextInput, TextArea, NumberInput, DateInput, Toggle, ToggleEditMode, TextSelect, UrlInput } from '../app/FormControls';
import sports from '../utils/sports';

export class Info extends Component {

  componentDidMount() {
    const id = this.props.location.pathname.split('/athletes/')[1];
    console.log('id', id);
    this.props.getInfo(id);
    this.props.getCountries();
  }
  
  render() {
    const { info, bio } = this.props.athletes;
    const disabled = false;

    function onChange(value) { console.log('was changed to ', value); }

    return (
      <div>
        <TextInput propName={info.firstName} name="firstName" label="First Name" change={onChange} disabled={disabled} />
        <TextInput propName={info.lastName} name="lastName" label="Last Name" change={onChange} disabled={disabled} />  
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
