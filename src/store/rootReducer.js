import { combineReducers } from 'redux';
import { info } from '../info/reducers';
import { location } from '../info/location/reducers';
import { authorized } from '../app/reducers'
import { sport } from '../sports/reducers';
import { edu } from '../edu/reducers';
import { media } from '../media/reducers';
import { search } from '../search/reducers';

export default combineReducers({
  authorized,
  info,
  location,
  sport,
  edu,
  media,
  search
});
