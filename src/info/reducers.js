import * as actions from './constants';

export function info(state = {}, { type, payload }) {
  switch(type) {
    case actions.GET_COUNTRIES:
    case actions.GET_REGIONS:
    case actions.GET_CITIES:
      return payload;
    default:
      return state;
  }
}
