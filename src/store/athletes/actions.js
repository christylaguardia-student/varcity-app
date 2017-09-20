import * as actions from './constants';
import athleteApi from '../../services/athleteApi';

export function makeGetInfo(api) {
  return function getInfo(id) {
    return (dispatch, getState) => {
      const { athletes } = getState();
      const athlete = athletes[id];
      if (athlete && athlete.info) return;
      return api
        .get(id, 'info')
        .then(athleteInfo => {
          dispatch({ type: actions.GET_INFO, payload: athleteInfo });
        });
    };
  };
}

export const getInfo = makeGetInfo(athleteApi);

export function makeUpdateAthlete(api) {
  return function updateAthlete(data) {
    return dispatch => {
      return api
        .update(data)
        .then(athlete => dispatch({ type: actions.UPDATE, payload: athlete }));
    };
  };
}

export const updateAthlete = makeUpdateAthlete(athleteApi);