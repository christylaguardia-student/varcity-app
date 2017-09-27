import * as actions from './constants';
import { media } from '../store/athletes/reducers';

describe.skip('media reducer', () => {

  it('initial state', () => {
    const newState = media(undefined, { type: undefined });
    expect(newState).toEqual([]);
  });

  it('gets athlete\'s media', () => {
    const gotMediaArray = [{ description: 'desc', mediaType: 'video link', videoUrl: 'something@youtube.com' }];
    const newState = media([], { type: actions.GET_MEDIA, payload: gotMediaArray });
    expect(newState).toEqual(gotMediaArray);
  });

  it('updates athlete\'s media', () => {
    const alreadyThere = { description: 'already there desc', mediaType: 'image Link', image: 'blerg.png' }
    const testMedia = { description: 'new desc', mediaType: 'image Link', image: 'blahblahblah.png' };
    const newState = media([alreadyThere], { type: actions.UPDATE_MEDIA, payload: testMedia });
    expect(newState).toEqual([alreadyThere, testMedia]);
  });
});
