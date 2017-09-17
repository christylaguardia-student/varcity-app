import React, { Component } from 'react';
// import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import BasicInfo from './BasicInfo';

class InfoContainer extends Component {
  render() {
  
    return (
      <div className="column is-mobile">
        <BasicInfo />
      </div>
    )
  }
}

// export default connect(state => {
//   return {
//     info: state.info
//   };
// }, {})(InfoContainer);

export default InfoContainer;