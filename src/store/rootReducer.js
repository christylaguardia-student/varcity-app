import { combineReducers } from 'redux';
import { authId } from '../app/reducers';
import { athletes } from './athletes/reducers';
import { address } from '../info/address/reducers';
import { educations } from '../edu/reducers';
import { media } from '../media/reducers';
import { sports } from '../sport/reducers';

export default combineReducers({
  authId,
  athletes,
  address,
  educations,
  media,
  sports
});
