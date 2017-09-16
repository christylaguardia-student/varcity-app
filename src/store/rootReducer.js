import { combineReducers } from 'redux';
import { info } from '../info/reducers';
import { sport } from '../sports/reducers';
import { edu } from '../edu/reducers';
import { media } from '../media/reducers';

export default combineReducers({
  info,
  sport,
  edu,
  media
});
