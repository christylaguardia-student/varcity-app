import * as actions from './constants';

export function athletes(state = {}, { type, payload }) {
  switch(type) {
    case actions.GET_INFO: {
      const { _id, info={} } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete,  info }
      };
    }
    case actions.UPDATE_INFO: {
      console.log('payload', payload);
      const { _id, info } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete,  info }
      };
    }
    default:
      return state;
  }
}
