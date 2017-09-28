import * as actions from './constants';
import { makeGetInfo, makeUpdateAthlete } from './actions';

// .skip to my lou...
describe.skip('info actions', () => {

  const testId = 123;
  const testInfo = { info: 'my info' };
  const testApi = {
    get(testId) { return Promise.resolve(testId); },
    update() { return Promise.resolve(testInfo); }
  };

  it('gets info', () => {
    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const getInfo = makeGetInfo(testApi);
    const dispatchFn = getInfo(testId);
    
    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.GET_INFO, payload: testId }]);
      });
  });

  it('updates athlete info', () => {
    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const updateInfo = makeUpdateAthlete(testApi);
    const dispatchFn = updateInfo(testInfo);
    
    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.UPDATE, payload: testInfo }]);
      });
  });
});
