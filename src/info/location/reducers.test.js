import * as actions from './constants';
import { location } from './reducers';

describe('location reducer', () => {

  const state = { countries: [], regions: [], cities: [] };

  it('initial state', () => {
    const testState = location(undefined, { type: undefined });
    expect(testState).toEqual(state);
  });
    
  it('gets countries', () => {
    const testState = location(state, { type: actions.GET_COUNTRIES, payload: [] });
    expect(testState).toEqual(state);
  });
    
  it('gets regions', () => {
    const testState = location(state, { type: actions.GET_REGIONS, payload: [] });
    expect(testState).toEqual(state);
  });
    
  it('gets cities', () => {
    const testState = location(state, { type: actions.GET_CITIES, payload: [] });
    expect(testState).toEqual(state);
  });

});
