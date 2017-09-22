import * as actions from './constants';

export function sports(state = [], { type, payload }) {
    switch (type) {
        case actions.LOAD_SPORTS:
            return payload;
        case actions.CREATE_NEW_SPORT:
            return [
                ...state,
                newSportItem(payload)
            ]
        default:
            return state;
    }
}

const newSportItem = (value) => {
  return {
    // _id: value.id || 1,
    sport: value.sport,
    organization: value.organization,
    position: value.position,
    stat: value.position,
    // statTitle: value.statTitle,
    // statScore: value.statScore,
    seasonDates: value.seasonDates,
    // saving: false
  }
};

  // case 'DELETE_SPORT':
  // const educations = state.sport;
  // const newState = Object.assign([], state);
  // // const index = sports.findIndex(e => e._id === payload);
  // // return {
  // //     ...state,
  // //     sports: [...sports.slice(0, index), ...sports.slice(index + 1)]
  // // };
  // // }
  // return state.filter((sport) => sport.id !== action.id)

