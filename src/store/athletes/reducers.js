import * as actions from './constants';
import defaultValues from './defaultValues';

export function athletes(state = defaultValues, { type, payload }) {
  switch(type) {
    case actions.GET_INFO:
      return payload;
    case actions.UPDATE:
      return payload;
    default:
      return state;
  }
}
