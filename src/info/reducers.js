import * as actions from './constants';

export function info(state = {}, { type, payload }) {
  switch(type) {
    case actions.ATHLETE_UPDATED:
      return payload;

    default:
      return state;
  }
}