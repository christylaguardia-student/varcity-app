import * as actions from './constants';
import { makeGetCountries, makeGetRegions, makeGetCities } from './actions';

describe('location actions', () => {
  
  const testCountry = 'Japan';
  const testCountries = [ 'Japan', 'Russia', 'Brazil' ];
  const riekCountries = [{ id: 0, text:'Japan' }, { id: 1, text:'Russia' }, { id: 2, text: 'Brazil' }];
  
  const testRegion = 'Miyagi';
  const testRegions = [ 'Miyagi', 'Miyazaki', 'Nagano' ];
  const riekRegions = [{ id: 0, text:'Miyagi' }, { id: 1, text:'Miyazaki' }, { id: 2, text: 'Nagano' }];
  
  const testCities = [ 'Yamoto', 'Watari', 'Wakuya' ];
  const riekCities = [{ id: 0, text:'Yamoto' }, { id: 1, text:'Watari' }, { id: 2, text: 'Wakuya' }];
  
  const testApi = {
    getCountries() { return Promise.resolve(testCountries); },
    getRegions(testCountry) { return Promise.resolve(testRegions); },
    getCities(testCountry, testRegion) { return Promise.resolve(testCities); }
  };
  
  it('gets countries', () => {
    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const getCountries = makeGetCountries(testApi);
    const dispatchFn = getCountries();
    
    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.GET_COUNTRIES, payload: riekCountries }]);
      });
  });
  
  it('gets regions', () => {
    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const getRegions = makeGetRegions(testApi);
    const dispatchFn = getRegions();

    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.GET_REGIONS, payload: riekRegions }]);
      });
  });
  
  it('gets cities', () => {
    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const getCities = makeGetCities(testApi);
    const dispatchFn = getCities();

    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.GET_CITIES, payload: riekCities }]);
      });
  });

});