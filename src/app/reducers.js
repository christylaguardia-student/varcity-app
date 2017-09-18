import {
  SIGN_UP,
  SIGN_IN,
  AUTHORIZED,
  AUTH_FAILURE
} from './constants';

export function app(state = null, { type, payload }) {
  switch (type) {
    case SIGN_IN:
      return null;
    case SIGN_UP:
      return payload;
    case AUTHORIZED:
      return payload;
    case AUTH_FAILURE:
      return null;
    default:
      return state;
  }
}

