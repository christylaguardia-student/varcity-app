import { AUTHORIZED, AUTH_FAILURE, SIGN_OUT } from './constants';
import authAPI from './api';

export function signUp({ payload }) {
  return function(dispatch) {
    return authAPI.signUpNewUser({ payload })
    .then(
      res => {
        const { token } = res.body.token.token;
        const storage = localStorage;
        storage.setItem('varcity', token);
        payload.token = token;
        return authAPI.signIn({payload}).then(savedUser => {
          dispatch({ type: AUTHORIZED, payload: savedUser.user._id });
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
        // dispatch({ type: AUTHORIZED, payload: res.token });
      },
      error => {
        // dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  };
}

export function signIn({ payload }) {
  return function(dispatch) {
    const storage = localStorage;
    const {token} = storage.getItem('varcity') || '';
    if (token) payload.token = token
      return authAPI.signIn({payload}).then(
        res => {
          const storage = localStorage;
          storage.setItem('varcity', res.token);
          dispatch({ type: AUTHORIZED, payload: res.user._id });

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
    dispatch({ type: SIGN_OUT, payload: null });
  };
}
