import { combineReducers } from 'redux';
import { authId } from '../app/reducers';
import { athletes } from './athletes/reducers';
import { sports } from '../sports/reducers';
import {search} from '../search/reducers';

export default combineReducers({
  authId,
  athletes,
  sports,
  search
});
