import { makeGetSport, makeUpdateSport } from './actions';
import * as actions from './constants';

describe('getSport', () => {

  it('GETs sport', () => {
    const testSport = [{ something: 'three properties here' }];
    const api = { get: (id) => Promise.resolve(testSport) };
    const dispatched = [];
    const dispatch = (action) => dispatched.push(action);

    const getSport = makeGetSport(api);
    return getSport(123)(dispatch)
      .then(() => {
        expect(dispatched).toEqual([
          { type: actions.LOAD_SPORTS, payload: testSport }
        ]);
      });
  });
});

describe('update sport', () => {

  it('Updates with new sport', () => {
    const testSport = { something: 'three properties here' };
    const api = { update: (id, sport) => Promise.resolve(sport) };
    const dispatched = [];
    const dispatch = (action) => {
      dispatched.push(action);
    };

    const updateSport = makeUpdateSport(api);
    return updateSport(123, testSport)(dispatch)
      .then(() => {
        expect(dispatched).toEqual([
          { type: actions.CREATE_NEW_SPORT, payload: testSport }
        ]);
      });
  });
});


