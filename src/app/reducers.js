import {
  AUTHORIZED,
  AUTH_FAILURE,
  SIGN_OUT
} from './constants';

export function authId(state = {}, { type, payload }) {
  switch (type) {
    case SIGN_OUT:
    return null;
    case AUTHORIZED:
      return payload;
    case AUTH_FAILURE:
      return null;
    default:
      return state;
  }
}

