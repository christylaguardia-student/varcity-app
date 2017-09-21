import * as actions from './constants';

export function sports(state = [], { type, payload }) {
    switch (type) {
        case actions.LOAD_SPORT:
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
    stat: value.stat,
    seasonDates: value.seasonDates,
    // saving: false
  }
};

