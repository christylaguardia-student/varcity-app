import React, { Component } from 'react';
// import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import Info from './Info';

class InfoContainer extends Component {

  render() {
    return (
      <div className="column is-mobile">
        <Info />
      </div>
    );
  }
}

export default InfoContainer;
