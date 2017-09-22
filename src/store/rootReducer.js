import { combineReducers } from 'redux';
import { authId } from '../app/reducers';
import { athletes } from './athletes/reducers';
import { educations } from '../edu/reducers';
import { sports } from '../sports/reducers';

export default combineReducers({
  authId,
  athletes,
  educations,
  sports
});
