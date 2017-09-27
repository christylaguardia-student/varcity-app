import { makeGetEducation, makeUpdateEducation } from './actions';
import * as actions from './constants';

describe('getEducation', () => {

  xit('GETs education', () => {
    const testEducation = [{ something: 'three properties here' }];
    const api = { get: (id) => Promise.resolve(testEducation) };
    const dispatched = [];
    const dispatch = (action) => dispatched.push(action);

    const getEducation = makeGetEducation(api);
    return getEducation(123)(dispatch)
      .then(() => {
        expect(dispatched).toEqual([
          { type: actions.LOAD_EDUCATIONS, payload: testEducation }
        ]);
      });
  });
});

describe('updateEducation', () => {

  xit('Updates with new education', () => {
    const testEducation = { something: 'three properties here' };
    const api = { update: (id, education) => Promise.resolve(education) };
    const dispatched = [];
    const dispatch = (action) => {
      dispatched.push(action);
    };

    const updateEducation = makeUpdateEducation(api);
    return updateEducation(123, testEducation)(dispatch)
      .then(() => {
        expect(dispatched).toEqual([
          { type: actions.CREATE_NEW_EDUCATION, payload: testEducation }
        ]);
      });
  });
});

