import * as actions from './constants';
import athleteApi from '../services/athleteApi';


export function makeGetEducation(api) {
    return function getEducation(id) {
      return dispatch => {
        return api
        .get(id)
    .then(education => {
        console.log(education)
            dispatch({type: actions.LOAD_EDUCATIONS, payload: education});})
        .catch(console.log);
    };
};
}

export const getEducation = makeGetEducation(athleteApi);

export function makeUpdateEducation(api) {
  return function updateEducation(id) {
    return dispatch => {
      return api
        .update(id)
        .then(education => {
          dispatch({ type: actions.CREATE_NEW_EDUCATION, payload: education });
        })
        .catch(console.log);
    };
  };
}

export const updateEducation = makeUpdateEducation(athleteApi);



export const createNewEducation = (education, newId) => {
  return {
      type: 'CREATE_NEW_EDUCATION', 
      _id: newId, 
      institution: education.institution,
      year: education.year,
      address: education.address, 
      degree: education.degree,
      testScores: education.testScores,
      saving: false    
  }
}


// export function createEducation(education) {
//     return function(dispatch) {
//         return EduApi.createEducation(education)
//         .then(response => {
//             dispatch(createNewEducationSuccess(response));
//             return response;
//         }).catch(error => {
//             throw(error);
//         });
//     };
// }

// export function loadEducationsSuccess(cats) {
//     return {type: actions.LOAD_EDUCATIONS_SUCCESS, educations};
//   }
    
//   export function createCatSuccess(cat) {
//     return {type: actions.CREATE_EDUCATION_SUCCESS, education};
//   }
  
//   export function deleteCatSuccess(cat) {
//     return {type: actions.DELETE_EDUCATION_SUCCESS, education};
//   }
  

// export function loadEducations() {
//     return function(dispatch) {
//         return EduApi.getAllEducation()
//         .then(educations => {
//             dispatch(loadEducationsSuccess(educations));
//         }).catch(error => {
//             throw(error);
//         });
//     };
// }

// export function createNewEducationSuccess (education) {
//   return function (dispatch) {
//       return EduApi.createNewEducationSuccess(education).then((response) => {
//           dispatch(createNewEducation(education, response.id))
//       }).catch(error => {
//           throw error
//       });
//   }
// }
     

// export const deleteEducation = (id) => {
//   return function(dispatch) {
//       return EduApi.deleteEducation(id)
//       .then((res) => {
//           dispatch(deleteEducation(id))
//       })
//       .catch((error) => {
//           throw error
//       })
//   }
// }