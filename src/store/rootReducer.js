import { combineReducers } from 'redux';
import { authId } from '../app/reducers';
import { athletes } from './athletes/reducers';
import { search } from '../search/reducers';

export default combineReducers({
  authId,
  athletes,
  search
});
