import * as actions from './constants';
import * as mediaActions from '../../media/constants';
import * as sportsActions from '../../sports/constants';

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

    case sportsActions.GET_SPORTS: {
      const { _id, sports=[] } = payload;
      const athlete = state[_id] || [];
      return {
        ...state,
        [_id]: { ...athlete, sports }
      };
    }

    case sportsActions.UPDATE_SPORTS: {
      const { _id, sports } = payload;
      const athlete = state[_id] || [];
      return {
        ...state,
        [_id]: { ...athlete, sports: [...sports] }
      };
    }
    
    default:
      return state;
  }
}
