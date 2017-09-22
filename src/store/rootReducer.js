import { combineReducers } from 'redux';
import { authId } from '../app/reducers';
import { athletes } from './athletes/reducers';

export default combineReducers({
  authId,
  athletes
});
