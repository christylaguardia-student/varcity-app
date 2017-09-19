import {
  SIGN_UP,
  SIGN_IN,
  AUTHORIZED,
  AUTH_FAILURE
} from './constants';

export function authorized(state = null, { type, payload }) {
  // console.log(type, payload);
  switch (type) {
    case SIGN_IN:
      return null;
    case SIGN_UP:
      return null;
    case AUTHORIZED:
      return payload;
    case AUTH_FAILURE:
      return null;
    default:
      return state;
  }
}

