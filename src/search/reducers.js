import { GOT_RESULTS, SEARCH, SEARCHING } from './constants';

export function search(state = {}, { type, payload }) {
  console.log(type, payload)
  switch (type) {
    case GOT_RESULTS:
      return payload;
    case SEARCH:
      return payload;
    case SEARCHING:
      return payload;
    default:
      return state;
  }
}
