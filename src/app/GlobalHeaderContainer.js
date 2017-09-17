import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GlobalHeader from './GlobalHeader';
import { signIn, signUp, httpCallback } from './actions';
import Home from './Home';
import { RIEInput } from 'riek';


export async function GlobalHeaderContainer(props) {
  console.log('in ghc props: ', props);
  const value='default';
  const change='change'
  return (
    <div>
      <GlobalHeader props={props} />
      <Home />
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
    firstName: state.firstName
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
