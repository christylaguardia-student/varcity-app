import { GOT_RESULTS, SEARCH, SEARCHING } from './constants';
import searchAPI from './api';

export function search({ payload }) {
  return function(dispatch) {
    return searchAPI.search({ payload })
    .then(results => {
      console.log(56, results)
      return true
      // dispatch({ type: SEARCHING, payload: results });
    });
  };
}
