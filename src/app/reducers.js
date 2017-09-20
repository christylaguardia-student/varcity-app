import {
  AUTHORIZED,
  AUTH_FAILURE,
  RETRIEVE_ID_WITH_TOKEN,
  SIGN_OUT
} from './constants';

export function authId(state = {}, { type, payload }) {
  switch (type) {
    case AUTHORIZED:
      return payload;
    case AUTH_FAILURE:
      return payload;
    case RETRIEVE_ID_WITH_TOKEN:
      return payload;
    case SIGN_OUT:
      return null;
    default:
      return state;
  }
}
