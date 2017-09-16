import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoContainer extends Component {

  render() {
    return (
      <div>
        <h1>Info Container</h1>
      </div>
    )
  }
}

export default connect(state => {
  return {
    info: state.info
  };
}, {})(InfoContainer);
