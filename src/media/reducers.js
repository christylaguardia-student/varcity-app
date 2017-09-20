import * as actions from './constants';

export function media(state = [], { type, payload }) {
  switch(type) {
    case actions.GET_MEDIA:
      return payload;
    case actions.UPDATE_MEDIA:
      console.log('inside actions update media state is', state, 'payload is', payload);
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}
