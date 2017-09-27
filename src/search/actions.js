import { GOT_RESULTS, NO_RESULTS, SEARCH_ERROR, SEARCHING } from './constants';
import searchAPI from './api';

export function searchDb({ payload }) {
  return function(dispatch) {
    dispatch({ type: SEARCHING });
    const storage = localStorage;
    payload.token = storage.getItem('varcity') || '';
    return searchAPI
      .search({ payload })
      .then(results => {
        console.log(99, results);
        if (results.length > 0) {
          dispatch({ type: GOT_RESULTS, payload: results });
        } else {
          dispatch({ type: NO_RESULTS, payload: null });
        }
      })
      .catch(error => {
        dispatch({ type: SEARCH_ERROR, payload: {error} });
      });
  };
}
