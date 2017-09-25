import { GOT_RESULTS, NO_RESULTS, SEARCH_ERROR, SEARCHING } from './constants';
import searchAPI from './api';

export function searchDb({ payload }) {
console.log(44, payload)
  return function(dispatch) {
    dispatch({ type: SEARCHING });
    return searchAPI
      .search({ payload })
      .then(results => {
        if (results.length > 0) {
          dispatch({ type: GOT_RESULTS, payload: results });
        } else {
          dispatch({ type: NO_RESULTS, payload: null });
        }
      })
      .catch(error => {
        console.log(55, error)
        // dispatch({ type: SEARCH_ERROR, payload: {error} });
      });
  };
}
