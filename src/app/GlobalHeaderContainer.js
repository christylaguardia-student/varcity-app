import React from 'react';
import { connect } from 'react-redux';
import GlobalHeader from './GlobalHeader';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import SearchContainer from '../search/SearchContainer';
import ProfileContainer from '../profile/ProfileContainer'
import { signIn, signUp, httpCallback } from './actions';
// import Home from './Home';

export function GlobalHeaderContainer() {
  return (
   <div>
    <GlobalHeader />
  </div>

  );
}
function mapDispatchToProps(dispatch) {
  return {
    signUp: (email, password) => {
      dispatch(signUp(email, password));
    },
    signIn: (email, password) => {
      dispatch(signIn(email, password));
    },
    httpCallback: value => {
      dispatch(httpCallback(value));
    }
  };
}

const mapStateToProps = (state) => {
  return {
    id: state.id,
    value: 'myvalue',
    authorized: state.authorized
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
