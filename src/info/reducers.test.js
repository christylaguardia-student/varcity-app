import * as actions from './constants';
import { info } from './reducers';

describe.only('info reducer', () => {

  it('initial state', () => {
    const newState = info(undefined, { type: undefined });
    expect(newState).toEqual({});
  });
    
  it('gets countries', () => {
    const newState = info([], { type: actions.GET_COUNTRIES, payload: [] });
    expect(newState).toEqual([]);
  });
    
  it('gets regions', () => {
    const newState = info([], { type: actions.GET_REGIONS, payload: [] });
    expect(newState).toEqual([]);
  });
    
  it('gets cities', () => {
    const newState = info([], { type: actions.GET_CITIES, payload: [] });
    expect(newState).toEqual([]);
  });

});
