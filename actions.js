import * as actions from './constants';
import eduApi from './eduApi';


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


export function createEducation(education) {
    return function(dispatch) {
        return EduApi.createEducation(education)
        .then(response => {
            dispatch(createNewEducationSuccess(response));
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadEducationsSuccess(cats) {
    return {type: actions.LOAD_EDUCATIONS_SUCCESS, educations};
  }
    
  export function createCatSuccess(cat) {
    return {type: actions.CREATE_EDUCATION_SUCCESS, education};
  }
  
  export function deleteCatSuccess(cat) {
    return {type: actions.DELETE_EDUCATION_SUCCESS, education};
  }
  

export function loadEducations() {
    return function(dispatch) {
        return EduApi.getAllEducation()
        .then(educations => {
            dispatch(loadEducationsSuccess(educations));
        }).catch(error => {
            throw(error);
        });
    };
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