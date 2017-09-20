import { combineReducers } from 'redux';
<<<<<<< Updated upstream
import { authId } from '../app/reducers';
import { athletes } from './athletes/reducers';
import { address } from '../info/address/reducers';
=======
import { info } from '../info/reducers';
import { location } from '../info/location/reducers';
import { app } from '../app/reducers';
import { authId } from '../app/reducers'
import { sport } from '../sports/reducers';
>>>>>>> Stashed changes
import { educations } from '../edu/reducers';
import { media } from '../media/reducers';

export default combineReducers({
  authId,
<<<<<<< Updated upstream
  athletes,
  address,
  educations,
  media
=======
  info,
  location,
  sport,
  educations,
  media,
  search
>>>>>>> Stashed changes
});
