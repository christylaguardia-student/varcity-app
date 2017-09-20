import * as actions from './constants';
import defaultValues from './defaultValues';

export function athletes(state = defaultValues, { type, payload }) {
  switch(type) {
    case actions.GET_INFO: {
      const { _id, info } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete,  info }
      };
    }
    case actions.UPDATE:
      return payload;
    default:
      return state;
  }
}
