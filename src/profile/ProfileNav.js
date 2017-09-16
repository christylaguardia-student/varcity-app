import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import InfoContainer from '../info/InfoContainer';
import SportsContainer from '../sports/SportsContainer';
import EduContainer from '../edu/EduContainer';
import MediaContainer from '../media/MediaContainer';

export default function ProfileNava() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/athletes">Info</Link></li>
          <li><Link to="/athletes/sports">Sports</Link></li>
          <li><Link to="/athletes/edu">Education</Link></li>
          <li><Link to="/athletes/media">Media</Link></li>
        </ul>
        <Switch>
          <Route exact path="/athletes" component={InfoContainer} />
          <Route path="/athletes/sports" component={SportsContainer} />
          <Route path="/athletes/edu" component={EduContainer} />
          <Route path="/athletes/media" component={MediaContainer} />
        </Switch>
      </div>
    </Router>
  )
}