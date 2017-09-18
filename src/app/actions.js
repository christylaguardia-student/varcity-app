import { AUTHORIZED, AUTH_FAILURE } from './constants';
import authAPI from './api';

export function signUp({ payload }) {
  console.log('signup: ',payload)
    return function(dispatch) {
      return authAPI.signUpNewUser({ payload })
      .then(
        res => {
          const {token} = res.body
          const storage = localStorage;
          storage.setItem('varcity', token)
          return authAPI.signIn(token)
          .then(result =>{
            dispatch({ type: AUTHORIZED, payload: result });
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
    console.log('in callback in action:', value);
    return authAPI.changeField( value )
    .then(
      res => {
        console.log('r: ',res)
        dispatch({ type: AUTHORIZED, payload: res.token });
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  };
};

export function signIn() {

  return function(dispatch) {
    const storage = localStorage;
    const token = storage.getItem('varcity')
    return authAPI.signIn(token)
    .then(
      res => {
        console.log('signin: ', res.body.user)
        dispatch({ type: AUTHORIZED, payload: res.token});
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  }
}