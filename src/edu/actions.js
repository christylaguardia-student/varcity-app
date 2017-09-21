import * as actions from './constants';
import athleteApi from '../services/athleteApi';

export function makeGetEducation(api) {
    return function getEducation(id) {
        return dispatch => {
            return api
                .get(id)
                .then(education => {
                    dispatch({ type: actions.LOAD_EDUCATIONS, payload: education });
                })
                .catch(console.log);
        };
    };
}

export const getEducation = makeGetEducation(athleteApi);

export function makeUpdateEducation(api) {
    return function updateEducation(id, data) {
        return dispatch => {
            return api
                .update(id, data)
                .then(education => {
                    dispatch({ type: actions.CREATE_NEW_EDUCATION, payload: education });
                })
                .catch(console.log);
        };
    };
}

export const updateEducation = makeUpdateEducation(athleteApi);

// export const createNewEducation = (education, newId) => {
//     return {
//         type: 'CREATE_NEW_EDUCATION',
//         _id: newId,
//         institution: education.institution,
//         year: education.year,
//         address: education.address,
//         degree: education.degree,
//         testScores: education.testScores,
//         saving: false
//     }
// }