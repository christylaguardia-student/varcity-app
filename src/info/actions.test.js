import * as actions from './constants';
import { makeGetCountries, makeGetRegions, makeGetCities } from './actions';

describe('info actions', () => {
  
  it('gets countries', () => {
    const countries = [ 'Japan', 'Russia', 'Brazil' ];
    const riekCountries = [{ id: 0, text:'Japan' }, { id: 1, text:'Russia' }, { id: 2, text: 'Brazil' }];
    const mockApi = {
      getCountries() { return Promise.resolve(countries); }
    };
    
    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const getCountries = makeGetCountries(mockApi);
    const dispatchFn = getCountries();
    
    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.GET_COUNTRIES, payload: riekCountries }]);
      });
  });
  
  it('gets regions', () => {
    const country = 'Japan';
    const riekRegions = [{ id: 0, text:'Miyagi' }, { id: 1, text:'Miyazaki' }, { id: 2, text: 'Nagano' }];
    const regions = ['Miyagi', 'Miyazaki', 'Nagano'];
    const mockApi = {
      getRegions(country) { return Promise.resolve(regions); }
    };

    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const getRegions = makeGetRegions(mockApi);
    const dispatchFn = getRegions();

    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.GET_REGIONS, payload: riekRegions }]);
      });
  });
  
  it('gets cities', () => {
    const country = 'Japan';
    const region = 'Miyagi';
    const riekCities = [{ id: 0, text:'Yamoto' }, { id: 1, text:'Watari' }, { id: 2, text: 'Wakuya' }];
    const cities = ['Yamoto', 'Watari', 'Wakuya'];

    const mockApi = {
      getCities(country, region) { return Promise.resolve(cities); }
    };

    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const getCities = makeGetCities(mockApi);
    const dispatchFn = getCities();

    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.GET_CITIES, payload: riekCities }]);
      });
  });

});