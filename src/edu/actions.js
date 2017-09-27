import * as actions from './constants';
import athleteApi from '../services/athleteApi';

export function makeGetEdu(api) {
  return function getEdu(id) {
    return (dispatch, getState) => {
      const { athletes } = getState();
      const athlete = athletes[id];
      if (athlete && athlete.edu) return;
      return api
        .getEduById(id)
        .then(edu => {
          dispatch({ type: actions.GET_EDU, payload: edu });
        });
    };
  };
}

export const getEdu = makeGetEdu(athleteApi);


export function makeUpdateSchools(api) {
  return function updateSchools(id, data) {
    return (dispatch, getState) => {
      const { athletes } = getState();
      const athlete = athletes[id];
      if (athlete && athlete.edu) return;
      return api
        .updateSchoolsById(id, data)
        .then(edu => {
          dispatch({ type: actions.UPDATE_SCHOOLS, payload: edu });
        });
    };
  };
}

export const updateSchools = makeUpdateSchools(athleteApi);


export function makeUpdateTestScores(api) {
  return function updateTestScores(id, data) {
    return (dispatch, getState) => {
      const { athletes } = getState();
      const athlete = athletes[id];
      if (athlete && athlete.edu) return;
      return api
        .updateTestScoresById(id, data)
        .then(edu => {
          dispatch({ type: actions.UPDATE_TESTSCORES, payload: edu });
        });
    };
  };
}

export const updateTestScores = makeUpdateTestScores(athleteApi);
