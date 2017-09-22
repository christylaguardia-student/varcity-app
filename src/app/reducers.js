import {
  AUTHORIZED,
  AUTH_FAILURE,
  NO_LOCAL_TOKEN,
  RETRIEVE_ID_WITH_TOKEN,
  SIGN_OUT
} from './constants';

export function authId(state = {}, { type, payload }) {
  console.log(type, payload)
  switch (type) {
    case AUTHORIZED:
      return payload;
    case AUTH_FAILURE:
      return null;
    case NO_LOCAL_TOKEN:
      return null;
    case RETRIEVE_ID_WITH_TOKEN:
      return payload;
    case SIGN_OUT:
      return null;
    default:
      return state;
  }
}
