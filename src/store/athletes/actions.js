import * as actions from './constants';
import athleteApi from '../../services/athleteApi';

export function makeGetInfo(api) {
  return function getInfo(id) {
    return (dispatch, getState) => {
      const { athletes } = getState();
      const athlete = athletes[id];
      if (athlete && athlete.info) return;
      return api
        .getInfoById(id)
        .then(athleteInfo => {
          dispatch({ type: actions.GET_INFO, payload: athleteInfo });
        });
    };
  };
}

export const getInfo = makeGetInfo(athleteApi);

export function makeUpdateInfo(api) {
  return function updateInfo(id, data) {
    return dispatch => {
      return api
        .update(id, data, 'info')
        .then(athleteInfo => {
          dispatch({ type: actions.UPDATE_INFO, payload: athleteInfo });
        });
    };
  };
}

export const updateInfo = makeUpdateInfo(athleteApi);