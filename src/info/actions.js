import * as actions from './constants';
import athleteApi from '../services/athleteApi';

export function makeUpdateAthlete(api) {
  return function updateAthlete(athleteData) {
    return dispatch => {
      return api
        .update(athleteData)
        .then(athlete => dispatch({ type: actions.ATHLETE_UPDATED, payload: athlete }))
    }
  }
}