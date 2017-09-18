import React from 'react';
import { connect } from 'react-redux';
import GlobalHeader from './GlobalHeader';
import { signIn, signUp, httpCallback } from './actions';
import Home from './Home';
import { withRouter } from 'react-router'

export async function GlobalHeaderContainer(props) {
  console.log('ghc: ', props)
  return (
    <div>
      <GlobalHeader props={props} />
      <Home props={props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
