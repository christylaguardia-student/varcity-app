import * as actions from './constants';
import { info, location } from './reducers';

describe('location reducer', () => {

  const state = { countries: [], regions: [], cities: [] };

  it('initial state', () => {
    const newState = location(undefined, { type: undefined });
    expect(newState).toEqual(state);
  });
    
  it('gets countries', () => {
    const newState = location(state, { type: actions.GET_COUNTRIES, payload: [] });
    expect(newState).toEqual(state);
  });
    
  it('gets regions', () => {
    const newState = location(state, { type: actions.GET_REGIONS, payload: [] });
    expect(newState).toEqual(state);
  });
    
  it('gets cities', () => {
    const newState = location(state, { type: actions.GET_CITIES, payload: [] });
    expect(newState).toEqual(state);
  });

});
