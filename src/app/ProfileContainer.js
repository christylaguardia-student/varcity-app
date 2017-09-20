import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import InfoContainer from '../info/InfoContainer';
import SportsContainer from '../sports/SportsContainer';
import EduContainer from '../edu/EduContainer';
import MediaContainer from '../media/MediaContainer';

export default function ProfileContainer() {
  const id = this.props.location.pathname.split('/athletes/')[1];
  
  return (
    <Router>
      <div>
        <ul>
          <li><Link to={`/athletes/:${id}`}>Info</Link></li>
          <li><Link to={`/athletes/:${id}/sports`}>Sports</Link></li>
          <li><Link to={`/athletes/:${id}/edu`}>Education</Link></li>
          <li><Link to={`/athletes/:${id}/media`}>Media</Link></li>
        </ul>
        <Switch>
          <Route path={`/athletes/:${id}`} component={InfoContainer} />
          <Route path={`/athletes/:${id}/sports`} component={SportsContainer} />
          <Route path={`/athletes/:${id}/edu`} component={EduContainer} />
          <Route path={`/athletes/:${id}/media`} component={MediaContainer} />
        </Switch>
      </div>
    </Router>
  );
}
