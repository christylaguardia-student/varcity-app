import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
// import { getCountries } from './actions';
import Info from './Info';
import Bio from './Bio';

class InfoContainer extends Component {

  

  render() {
    return (
      <div className="column is-mobile">
        <Info />
        <Bio />
      </div>
    )
  }
}

export default InfoContainer;

// export default connect(state => {
//   return {
//     info: state.info
//   };
// }, { getCountries })(InfoContainer);
