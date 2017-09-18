import {
  SIGN_UP,
  SIGN_IN,
  AUTHORIZED,
  AUTH_FAILURE
} from './constants';

export function app(state = null, { type, payload }) {
  console.log(type, payload);
  switch (type) {
    case SIGN_IN:
      return null;
    case SIGN_UP:
      return state;
    case AUTHORIZED:
      return state;
    case AUTH_FAILURE:
      return null;
    default:
      return state;
  }
}

