import * as actions from './constants';

export function media(state = [], { type, payload }) {
  switch(type) {
    case actions.GET_MEDIA:
      return payload;
    case actions.UPDATE_MEDIA:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}