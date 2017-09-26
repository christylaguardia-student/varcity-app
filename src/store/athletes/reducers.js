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
        [_id]: { ...athlete,  edu }
      };
    }
    case eduActions.UPDATE_EDU: {
      const { _id, edu } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete,  edu }
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
