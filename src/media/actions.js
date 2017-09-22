import * as actions from './constants';
import athleteApi from '../services/athleteApi';

export function makeGetMedia(api) {
  return function getMedia(id) {
    return (dispatch, getState) => {
      const { athletes } = getState();
      const athlete = athletes[id];
      if (athlete && athlete.media) return;
      return api
        .get(id, 'media')
        .then(media => {
          console.log('media returning from get media is', media);
          dispatch({ type: actions.GET_MEDIA, payload: {_id: id, media: media} });
        })
        .catch(console.log);
    };
  };
}

export const getMedia = makeGetMedia(athleteApi);

export function makeUpdateMedia(api) {
  return function updateMedia(id, media) {
    console.log('incoming in updateMedia: id', id, "media:", media);
    return dispatch => {
      return api
        .update(id, media, 'media')
        .then(data => {
          console.log('media returning from update media is', data, 'id is', id);
          dispatch({ type: actions.UPDATE_MEDIA, payload: {_id: id, media: data} });
        })
        .catch(err => console.log('we got this error in updatemedia:', err));
    };
  };
}

export const updateMedia = makeUpdateMedia(athleteApi);
