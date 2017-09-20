import {
  AUTHORIZED,
  AUTH_FAILURE,
  RETRIEVE_ID_WITH_TOKEN,
  SIGN_OUT
} from './constants';
import authAPI from './api';

export function retrieveWithToken() {
  const storage = localStorage;
  const token = storage.getItem('varcity') || '';
  return function(dispatch) {
    if (token) {
      return authAPI.retrieveWithToken(token).then(id => {
        dispatch({ type: RETRIEVE_ID_WITH_TOKEN, payload: id });
      });
    } else {
      dispatch({ type: AUTH_FAILURE, payload: null });
    }
  };
}
export function signUp({ payload }) {
  return function(dispatch) {
    return authAPI.signUpNewUser({ payload }).then(
      res => {
        const { token, user } = res.body;
        const storage = localStorage;
        storage.clear('varcity');
        storage.setItem('varcity', token);
        payload.token = token;
        return authAPI.signIn({ payload }).then(savedUser => {
          dispatch({ type: AUTHORIZED, payload: savedUser.user.user._id });
        });
      },
      error => {
        dispatch({ type: AUTH_FAILURE, payload: error.status });
      }
    );
  };
}

export function signIn({ payload }) {
  return function(dispatch) {
    const storage = localStorage;
    const { token } = storage.getItem('varcity') || '';
    return authAPI.signIn({ payload }).then(
      res => {
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
