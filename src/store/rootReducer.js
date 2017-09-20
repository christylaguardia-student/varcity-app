import { combineReducers } from 'redux';
import { authId } from '../app/reducers';
import { athletes } from './athletes/reducers';
import { address } from '../info/address/reducers';

export default combineReducers({
  authId,
  athletes,
  address,
});
