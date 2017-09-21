import * as actions from './constants';
import { sports } from './reducers';

describe('sport reducer', () => {
  it.only('initial state', () => {
    const newState = sports(undefined, { type: undefined });
    expect(newState).toEqual([]);
  });

  it.only('gets athlete sports', () => {
    const gotSportArray = [{  }];
    const newState = sports([], { type: actions.LOAD_SPORTS, payload: gotSportArray });
    expect(newState).toEqual(gotSportArray);
  });

  it.only('updates athlete sport', () => {
    const alreadyThere = {  };
    const testSport = {  };
    const newState = sports([alreadyThere], { type: actions.CREATE_NEW_SPORT, payload: testSport });
    expect(newState).toEqual([alreadyThere, testSport]);
  });
})