import * as actions from './constants';
import athleteApi from '../../services/athleteApi';

export function makeGetInfo(api) {
  return function getInfo(id) {
    return dispatch => {
      return api
        .get(id)
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