import * as actions from './constants';
import './eduApi';


export function getAllEducation(id) {
  return dispatch => {
      dispatch({type: actions.LOAD_EDUCATION});
      EduApi.get(id)
          .then(
              events => {
                  dispatch({
                      type: actions.LOAD_EDUCATIONS, payload: educations
                  });
              },
              error => {
                  dispatch({
                      type: actions.LOAD_EDUCATIONS_ERROR, payload: error
                  });
              }
          );
  };
}

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

export function createNewEducationSuccess (education) {
  return function (dispatch) {
      return EduApi.createNewEducationSuccess(education).then((response) => {
          dispatch(createNewEducation(education, response.id))
      }).catch(error => {
          throw error
      });
  }
}
     

export const deleteEducation = (id) => {
  return function(dispatch) {
      return EduApi.deleteEducation(id)
      .then((res) => {
          dispatch(deleteEducation(id))
      })
      .catch((error) => {
          throw error
      })
  }
}