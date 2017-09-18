import React from 'react';
import { connect } from 'react-redux';
import GlobalHeader from './GlobalHeader';
import { signIn, signUp, httpCallback } from './actions';
import Home from './Home';


export async function GlobalHeaderContainer(props) {

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
    firstName: state.firstName
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
