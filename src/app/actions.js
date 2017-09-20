import { AUTHORIZED, AUTH_FAILURE } from './constants';
import authAPI from './api';

export function signUp({ payload }) {
  return function(dispatch) {
    return authAPI.signUpNewUser({ payload })
    .then(
      res => {
        const { token } = res.body;
        const storage = localStorage;
        storage.setItem('varcity', token);
        payload.token = token;
        console.log(87,payload)
        return authAPI.signIn({payload}).then(savedUser => {
          dispatch({ type: AUTHORIZED, payload: savedUser });
        });
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  };
}

export function httpCallback({ value }) {
  return function(dispatch) {
    return authAPI.changeField(value).then(
      res => {
        dispatch({ type: AUTHORIZED, payload: res.token });
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  };
}

export function signIn({ payload }) {
  console.log(9, payload)

  return function(dispatch) {
    const storage = localStorage;
    const token = storage.getItem('varcity');
    console.log(11, token);
    if (!token) payload.token = null
      // console.log(90, payload.email, payload.password)
      return authAPI.signIn({payload}).then(
        res => {
          console.log(50, res);
          dispatch({ type: AUTHORIZED, payload: res });
        },
        error => {
          dispatch({ type: AUTH_FAILURE, payload: error.status });
        }
      );

  };
}

export function signOut() {
  return function(dispatch) {
    const storage = localStorage;
    const token = storage.removeItem('varcity');
    console.log(11, token);
    dispatch({ type: AUTHORIZED, payload: null });
  };
}
