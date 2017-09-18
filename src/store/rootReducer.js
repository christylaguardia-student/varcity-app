import { combineReducers } from 'redux';
import { info, location } from '../info/reducers';
import { app } from '../app/reducers'
import { info, location } from '../info/reducers';
import { sport } from '../sports/reducers';
import { edu } from '../edu/reducers';
import { media } from '../media/reducers';
import { search } from '../search/reducers';

export default combineReducers({
  app,
  info,
  location,
  sport,
  edu,
  media,
  search
});
