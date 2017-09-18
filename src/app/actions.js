import { AUTHORIZED, AUTH_FAILURE } from './constants';
import authAPI from './api';
const superagent = require('superagent');


async function httpTaskCallback ({value}){
  return superagent.post('/change').query({value: value})
  .then(results => {
    console.log('htc: ', results)
    return results
  })
}



export function signUp({ payload }) {
  console.log('signup: ',payload)
    return function(dispatch) {
      return authAPI.signUpNewUser({ payload })
      .then(
        res => {
          dispatch({ type: AUTHORIZED, payload: res.token });
        },
        error => {
          dispatch({ type: AUTH_FAILURE, payload: error.status });
        }
      );
    };
}

export function httpCallback ({value}) {
  console.log('in callback in action:', value);
  return function(dispatch) {
    return authAPI.changeField({ value })
    .then(
      res => {
        console.log(res)
        dispatch({ type: AUTHORIZED, payload: res.token });
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  };
};

export function signIn({payload}) {
  return function(dispatch) {
    return authAPI.signIn({payload})
    .then(
      res => {
        console.log('signin: ', res)
        dispatch({ type: AUTHORIZED, payload: res.token});
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  }
}