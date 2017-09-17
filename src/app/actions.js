import { AUTHORIZED, AUTH_FAILURE } from './constants';
import authAPI from './api';

export function signUp({ payload }) {
  console.log('signup: ',payload)
    return function(dispatch) {
      return authAPI.signUpNewUser({ payload })
      .then(
        res => {
          console.log('ressignup: ', res)
          dispatch({ type: AUTHORIZED, payload: res.token });
        },
        error => {
          dispatch({ type: AUTH_FAILURE, payload: error.status });
        }
      );
    };
}

export function httpCallback ({value}) {
  return function(dispatch) {
    console.log('in callback in action:', value);
    return authAPI.changeField( value )
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