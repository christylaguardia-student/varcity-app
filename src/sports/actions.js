import * as actions from '../sports/constants';
import athleteApi from '../services/athleteApi';

export function makeGetSports(api) {
  return function getSports(id) {
    return (dispatch, getState) => {
      const { athletes } = getState();
      const athlete = athletes[id];
      if (athlete && athlete.sports) return;
      return api
        .getSportsById(id)
        .then(sports => {
          dispatch({ type: actions.GET_SPORTS, payload: sports });
        });
    };
  };
}

export const getSports = makeGetSports(athleteApi);

export function makeUpdateSports(api) {
  return function updateSports(id, data) {
    return dispatch => {
      return api
        .updateSportsById(id, data)
        .then(sports => {
          dispatch({ type: actions.UPDATE_SPORTS, payload: sports });
        });
    };
  };
}

export const updateSports = makeGetSports(athleteApi);
