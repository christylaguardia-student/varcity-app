import * as actions from './constants';
import { info } from './reducers';

describe('info reducer', () => {

  it('initial state', () => {
    const newState = info(undefined, { type: undefined });
    expect(newState).toEqual({});
  });

  it('gets athlete info', () => {
    const testId = 123;
    const newState = info({}, { type: actions.GET_INFO, payload: testId });
    expect(newState).toEqual(testId);
  });

  it('updates athlete info', () => {
    const testInfo = { firstName: 'Christy', lastName: 'La Guardia' };
    const newState = info({}, { type: actions.UPDATE_INFO, payload: testInfo });
    expect(newState).toEqual(testInfo);
  });

});
