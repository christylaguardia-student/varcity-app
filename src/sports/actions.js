import * as actions from './constants';
import athleteApi from '../services/athleteApi';

export function makeGetSport(api) {
    return function getSport(id) {
        return dispatch => {
            return api
                .get(id)
                .then(sport => {
                    dispatch({ type: actions.LOAD_SPORTS, payload: sport });
                })
                .catch(console.log);
        };
    };
}

export const getSport = makeGetSport(athleteApi);

export function makeUpdateSport(api) {
    return function updateSport(id, data) {
        return dispatch => {
            return api
                .update(id, data)
                .then(sport => {
                    dispatch({ type: actions.CREATE_NEW_SPORT, payload: sport });
                })
                .catch(console.log);
        };
    };
}

export const updateSport = makeUpdateSport(athleteApi);