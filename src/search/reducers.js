import { GOT_RESULTS, NO_RESULTS, SEARCH, SEARCH_ERROR, SEARCHING } from './constants';

export function search(state = {}, { type, payload }) {
  console.log(type, payload);
  switch (type) {
    case GOT_RESULTS:
      return payload;
    case NO_RESULTS:
      return payload;
    case SEARCH:
      return payload;
      case SEARCH_ERROR:
      return payload;
    case SEARCHING:
      return payload;
    default:
      return state;
  }
}
