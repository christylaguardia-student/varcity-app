import { combineReducers } from 'redux';
import { authId } from '../app/reducers';
import { athletes } from './athletes/reducers';
import { educations } from '../edu/reducers';
import { sports } from '../sports/reducers';
import { media } from '../media/reducers';

export default combineReducers({
  authId,
  athletes,
  educations,
  media,
  sports
});
