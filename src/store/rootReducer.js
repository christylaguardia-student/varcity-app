import { combineReducers } from 'redux';
import { authorized } from '../app/reducers';
import { athletes } from '../athletes/reducers';
import { address } from '../info/address/reducers';

export default combineReducers({
  authorized,
  athletes,
  address,
});
