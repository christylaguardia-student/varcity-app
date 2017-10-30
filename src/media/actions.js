import * as actions from './constants';
import athleteApi from '../services/athleteApi';

export function makeGetMedia(api) {
  return function getMedia(id) {
    return (dispatch, getState) => {
      const { athletes } = getState();
      const athlete = athletes[id];
      if (athlete && athlete.media) return;
      return api
        .getMediaById(id)
        .then(data => {
          dispatch({ type: actions.GET_MEDIA, payload: {_id: id, media: [...data] } });
        });
      };
  };
}

export const getMedia = makeGetMedia(athleteApi);


export function makeUpdateMedia(api) {
  return function updateMedia(id, media) {
    return dispatch => {
      return api
        .updateMediaById(id, media)
        .then(data => {
          dispatch({ type: actions.UPDATE_MEDIA, payload: {_id: id, media: [...data]} });
        });
    };
  };
}

export const updateMedia = makeUpdateMedia(athleteApi);
