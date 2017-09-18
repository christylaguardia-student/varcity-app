import * as actions from './constants';

export function info(state = {}, { type, payload }) {
  switch(type) {
    case actions.GET_INFO:
    case actions.UPDATE_INFO:
      return payload;
    default:
      return state;
  }
}
