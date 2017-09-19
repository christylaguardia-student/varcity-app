import * as actions from './constants';
import athleteApi from '../services/athleteApi';

export function makeGetMedia(api) {
  return function getMedia(id) {
    return dispatch => {
      return api
        .get(id, 'media')
        .then(media => dispatch({ type: actions.GET_MEDIA, payload: media }))
        .catch(console.log);
    };
  };
}

export const getMedia = makeGetMedia(athleteApi);

export function makeUpdateMedia(api) {
  return function updateMedia(id, media) {
    return dispatch => {
      return api
        .update(id, media, 'media')
        .then(media => dispatch({ type: actions.UPDATE_MEDIA, payload: media }))
        .catch(console.log);
    };
  };
}

export const updateMedia = makeUpdateMedia(athleteApi);
