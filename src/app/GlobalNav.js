import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import ProfileContainer from '../profile/ProfileContainer';

export default function Header() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/athletes">Profile</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/athletes" component={ProfileContainer} />
        </Switch>
      </div>
    </Router>
  )
}