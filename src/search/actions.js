import { GOT_RESULTS, NO_RESULTS, SEARCH, SEARCH_ERROR, SEARCHING } from './constants';
import searchAPI from './api';

export function search({ payload }) {
  return function(dispatch) {
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
        dispatch({ type: SEARCH_ERROR, payload: { error } });
      });
  };
}
