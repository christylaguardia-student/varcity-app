import * as actions from './constants';

export function educations(state = [], { type, payload }) {
    switch (type) {
        case actions.LOAD_EDUCATIONS:
            return payload;
        case actions.CREATE_NEW_EDUCATION:
            return [
                ...state,
                newEducationItem(payload)
            ]
        default:
            return state;
    }
}

const newEducationItem = (item) => {
    return {
        _id: item._id || 1,
        institution: item.institution,
        year: item.year,
        address: item.address,
        degree: item.degree,
        testScores: item.testScores,
        saving: false
    }
};

//   case 'DELETE_EDUCATION':
//   const educations = state.educations;
//   const newState = Object.assign([], state);
//   // const index = events.findIndex(e => e._id === payload);
//   // return {
//   //     ...state,
//   //     events: [...events.slice(0, index), ...events.slice(index + 1)]
//   // };
//   // }
//   return state.filter((education) => education.id !== action.id)

// export function educationsError(state = null, action) {
//   switch (action.type) {
//       case actions.LOAD_EDUCATIONS:
//       case actions.CREATE_NEW_EDUCATION:
//           return action.payload;
//       case actions.LOADING_EDUCATIONS:
//       case actions.CREATING_NEW_EDUCATION:
//           return null;
//       default:
//           return state;
//   }
// }

// export function educationsLoading(state = false, action) {
//   switch(action.type) {
//       case actions.LOADING_EDUCATION:
//       case actions.CREATING_NEW_EDUCATION:
//           return true;
//       case actions.LOAD_EDUCATION:
//       case actions.CREATE_NEW_EDUCATIONS:
//       case actions.LOAD_EDUCATIONS_ERROR:
//       case actions.CREATE_NEW_EDUCATION_ERROR:
//           return false;
//       default:
//           return state;
//   }
// }

