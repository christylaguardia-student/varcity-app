import * as actions from './constants';
import { makeGetCountries } from './actions';

describe('info actions', () => {

  it('gets countries', () => {
    const countries = [ 'Japan', 'Russia', 'Brazil' ]
    const riekCountries = [{ id:0, text:'Japan' }, { id:1, text:'Russia' }, { id:2, text: 'Brazil' }]
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

});