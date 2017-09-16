import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import SearchContainer from '../search/SearchContainer';
import ProfileContainer from '../profile/ProfileContainer';

export default function Header() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><input placeholder="search"/></li>
          <li><Link to="/athletes">Search</Link></li>
          <li><Link to="athletes/:id">Profile</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/athletes" component={SearchContainer} />
          <Route exact path="/athletes/:id" component={ProfileContainer} />
        </Switch>
      </div>
    </Router>
  )
}
