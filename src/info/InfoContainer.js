import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import { getCountries } from './actions';
import Info from './Info';
import Bio from './Bio';

class InfoContainer extends Component {

  componentDidMount() {
    this.props.getCountries();
  }

  render() {
    return (
      <div className="column is-mobile">
        <Info />
        <Bio />
      </div>
    )
  }
}

export default connect(state => {
  return {
    info: state.info
  };
}, { getCountries })(InfoContainer);
