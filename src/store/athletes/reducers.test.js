import * as actions from './constants';
import { athletes } from './reducers';
import defaultValues from './defaultValues';

describe('athletes reducer', () => {

  it('initial state', () => {
    const newState = athletes(undefined, { type: undefined });
    expect(newState).toEqual(defaultValues);
  });

  it('gets info and bio', () => {
    const testId = 123;
    const newState = athletes({}, { type: actions.GET_INFO, payload: testId });
    expect(newState).toEqual(testId);
  });

  it('updates info and bio', () => {
    const testInfo = { firstName: 'Christy', lastName: 'La Guardia' };
    const newState = athletes({}, { type: actions.UPDATE, payload: testInfo });
    expect(newState).toEqual(testInfo);
  });

});
