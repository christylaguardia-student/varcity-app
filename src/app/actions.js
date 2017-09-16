import { AUTHORIZED, AUTH_FAILURE } from './constants';
import authAPI from './api';

export function signUp({ payload }) {
    return function(dispatch) {
      return authAPI.signUpNewUser({ payload })
      .then(
        res => {
          dispatch({ type: AUTHORIZED, payload: res.text });
        },
        error => {
          dispatch({ type: AUTH_FAILURE, payload: error.status });
        }
      );
    };
}

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