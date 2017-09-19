import * as actions from './constants';
import initialState from './initialState';

export function edu(state = initialState.educations, { type, payload }) {
  return state;
}

export function educations(state = [], action) {
  switch (action.type) {
      case 'LOAD_EDUCATIONS':
          return action.educations;

      case 'CREATE_NEW_EDUCATION':
          return [
              ...state,
              education(undefined, action)
          ]

      case 'DELETE_EDUCATION':
          const educations = state.educations;
          // const index = events.findIndex(e => e._id === payload);
          // return {
          //     ...state,
          //     events: [...events.slice(0, index), ...events.slice(index + 1)]
          // };
          // }
          return state.filter((education) => education._id !== action.id)
      default: 
          return state;
      }
}

export function educationsError(state = null, action) {
  switch (action.type) {
      case actions.LOAD_EDUCATIONS:
      case actions.CREATE_NEW_EDUCATION:
          return action.payload;
      case actions.LOADING_EDUCATIONS:
      case actions.CREATING_NEW_EDUCATION:
          return null;
      default:
          return state;
  }
}

export function educationsLoading(state = false, action) {
  switch(action.type) {
      case actions.LOADING_EDUCATION:
      case actions.CREATING_NEW_EDUCATION:
          return true;
      case actions.LOAD_EDUCATION:
      case actions.CREATE_NEW_EDUCATIONS:
      case actions.LOAD_EDUCATIONS_ERROR:
      case actions.CREATE_NEW_EDUCATION_ERROR:
          return false;
      default:
          return state;
  }
}

const education = (state = {}, action) => {
  switch (action.type) {
      case 'CREATE_NEW_EDUCATION':
          return {
              _id: action._id || 1,
              institution: action.institution,
              year: action.year,
              address: action.address,
              degree: action.degree,
              testScores: action.testScores,
              saving: false
          }
          default:
              return state
  }
}

export default education;
