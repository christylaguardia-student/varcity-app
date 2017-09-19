import { AUTHORIZED, AUTH_FAILURE } from './constants';
import authAPI from './api';

export function signUp({ payload }) {
    return function(dispatch) {
      return authAPI.signUpNewUser({ payload })
      .then(
        res => {
          const {token} = res.body;
          const storage = localStorage;
          storage.setItem('varcity', token);
          return authAPI.signIn(token)
          .then(savedUser => {
            dispatch({ type: AUTHORIZED, payload: savedUser });
          })
        },
        error => {
          dispatch({ type: AUTH_FAILURE, payload: error.status });
        }
      );
  };
}

export function httpCallback ({value}) {
  return function(dispatch) {
    return authAPI.changeField( value )
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

export function signIn() {
  return function(dispatch) {
    const storage = localStorage;
    const token = storage.getItem('varcity');
    return authAPI.signIn(token)
    .then(
      res => {
        dispatch({ type: AUTHORIZED, payload: res});
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  }
}