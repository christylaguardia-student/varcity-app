import * as actions from './constants';
import * as mediaActions from '../../media/constants';
import * as eduActions from '../../edu/constants';

export function athletes(state = {}, { type, payload }) {
  switch(type) {
    case actions.GET_INFO: {
      const { _id, info={} } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete,  info }
      };
    }
    case actions.UPDATE_INFO: {
      const { _id, info } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete,  info }
      };
    }
    case eduActions.GET_EDU: {
      const { _id, edu={} } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete,  edu: { schools: edu.schools, testScores: edu.testScores} }
      };
    }
    case eduActions.UPDATE_SCHOOLS: {
      const { _id, schools } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete, edu: { schools: [...schools] } }
      };
    }
    case eduActions.UPDATE_TESTSCORES: {
      const { _id, test } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete, edu: { testScores: { test } } }
      };
    }
    case mediaActions.GET_MEDIA: {
      const { _id, media=[] } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete, media }
      };
    }
    case mediaActions.UPDATE_MEDIA: {
      const { _id, media } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete, media: [...media] }
      };
    }
    default:
      return state;
  }
}
