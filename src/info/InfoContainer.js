import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import { getInfo } from '../store/athletes/actions';
import { getCountries, getRegions, getCities } from './address/actions';
import Info from './Info';

export class InfoContainer extends Component {

  componentDidMount() {
    const id = this.props.location.pathname.split('/athletes/')[1];
    this.props.getInfo(id);
    this.props.getCountries();
  }

  render() {
    return(
      <div>
        info container
        <Info />
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
    // id: '59c07c3dee27d1b10998f54b', //this.props.location,
    athletes: state.athletes,
    address: state.address,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
