import * as actions from './constants';
import athleteApi from '../services/athleteApi';

export function makeGetInfo(api) {
  return function getInfo(id) {
    return dispatch => {
      return api
        .get(id)
        .then(athlete => dispatch({ type: actions.GET_INFO, payload: athlete }));
    };
  };
}

export const getInfo = makeGetInfo(athleteApi);

export function makeUpdateInfo(api) {
  return function updateInfo(infoData) {
    return dispatch => {
      return api
        .update(infoData)
        .then(athlete => dispatch({ type: actions.UPDATE_INFO, payload: athlete }));
    };
  };
}

export const updateInfo = makeUpdateInfo(athleteApi);