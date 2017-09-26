// import * as actions from './constants';
// export function media(state = {}, { type, payload }) {
//   console.log('type in reducer is', type);
//   switch (type) {
//     case actions.GET_MEDIA: {
//       console.log('payload in media get reducer is', payload, 'state is', state);
//       const { _id, media=[] } = payload;
//       const athlete = state[_id] || {};
//       return {
//         ...state,
//         [_id]: { ...athlete, media }
//       };
//     }
//     case actions.UPDATE_MEDIA: {
//       console.log('payload in media update reducer is', payload, 'state is', state);
//       const { _id, media } = payload;
//       const athlete = state[_id] || {};
//       return {
//         ...state,
//         [_id]: { ...athlete, media }
//       };
//     }
//     default:
//       console.log('returning state instead', state);
//       return state;
//   }
// }
