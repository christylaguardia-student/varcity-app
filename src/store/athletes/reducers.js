import * as actions from './constants';
import * as mediaActions from '../../media/constants';

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
      console.log('payload', payload);
      const { _id, info } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete,  info }
      };
    }
    case mediaActions.GET_MEDIA: {
      console.log('payload in media get reducer is', payload, 'state is', state);
      const { _id, media=[] } = payload;
      const athlete = state[_id] || {};
      return {
        ...state,
        [_id]: { ...athlete, media }
      };
    }
    case mediaActions.UPDATE_MEDIA: {
      console.log('payload in media update reducer is', payload, 'state is', state);
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
