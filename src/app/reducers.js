import {
  AUTHORIZED,
  AUTH_FAILURE,
  SIGN_OUT
} from './constants';

export function authorized(state = null, { type, payload }) {
  console.log(type, payload);
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

