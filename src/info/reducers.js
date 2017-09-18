import * as actions from './constants';

export function info(state = {}, { type, payload }) {
  switch(type) {
    case actions.GET_COUNTRIES:
      return payload;

    default:
      return state;
  }
}