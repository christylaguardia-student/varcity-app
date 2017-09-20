import { makeGetMedia, makeUpdateMedia } from './actions';
import * as actions from './constants';

describe('getMedia', () => {

  it('GETs media', () => {
    const testMedia = [{ something: 'three properties here' }];
    const api = { get: (id) => Promise.resolve(testMedia) };
    const dispatched = [];
    const dispatch = (action) => dispatched.push(action);

    const getMedia = makeGetMedia(api);
    return getMedia(123)(dispatch)
      .then(() => {
        expect(dispatched).toEqual([
          { type: actions.GET_MEDIA, payload: testMedia }
        ]);
      });
  });
});

describe('updateMedia', () => {

  it('Updates with new media', () => {
    const testMedia = { something: 'three properties here' };
    const api = { update: (id, media) => Promise.resolve(media) };
    const dispatched = [];
    const dispatch = (action) => dispatched.push(action);

    const updateMedia = makeUpdateMedia(api);
    return updateMedia(123, testMedia)(dispatch)
      .then(() => {
        expect(dispatched).toEqual([
          { type: actions.UPDATE_MEDIA, payload: testMedia }
        ]);
      });
  });
});
