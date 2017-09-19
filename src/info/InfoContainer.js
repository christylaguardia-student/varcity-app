import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import { getInfo } from '../store/athletes/actions';
import { getCountries, getRegions, getCities } from './address/actions';
import Info from './Info';

class InfoContainer extends Component {

  componentDidMount() {
    const userId = this.props.location.pathname.split('/athletes/')[1];
    this.props.getInfo(userId);
    console.log('userId',userId);
    
    if (this.props.address.countries.length === 0) this.props.getCountries();
  }

  render() {
    return (
      <div className="column is-mobile">
        <Info />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
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
}

const mapStateToProps = (state) => {
  return {
    athletes: state.athletes,
    address: state.address
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);