import * as actions from './constants';
import { educations} from './reducers';

describe('education reducer', () => {
  it('initial state', () => {
    const newState = educations(undefined, { type: undefined });
    expect(newState).toEqual([]);
    });
    
    it('gets athlete educations', () => {
    const gotEducationArray = [{ institution: 'Yale', year: 2003, address: 'Philadelphia', degree: 'Graduate degree', testScores: 1800, saving: false}];
    const newState = educations([], { type: actions.LOAD_EDUCATIONS, payload: gotEducationArray });
    expect(newState).toEqual(gotEducationArray);
    });
    
    it('updates athlete education', () => {
    const alreadyThere = { institution: '', year: null, address: '', degree: '', testScores: null, saving: false };
    const testEducation = { _id: 1, institution: 'Powells', year: 2007, address: 'Portland', degree: 'Undergraduate degree', testScores: 500, saving: false };
    const newState = educations([alreadyThere], { type: actions.CREATE_NEW_EDUCATION, payload: testEducation });
    expect(newState).toEqual([alreadyThere, testEducation]);
    });
})