import React, { Component } from 'react';
import GlobalFooter from './GlobalFooter';
import GlobalHeaderContainer from './GlobalHeaderContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import SearchContainer from '../search/SearchContainer';
import ProfileContainer from './ProfileContainer';
import Home from './Home';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { authorized, id } = this.props;
    const notAuth = [
      <Route key="1" exact path="/" component={Home} />,
      <Redirect key="2" to="/" />
    ];
    const auth = [
      <Route key="4" path={`/athletes/${id}`} component={ProfileContainer} />,
      <Route key="3" path="/athletes" component={SearchContainer} />,
      <Redirect key="5" to="/athletes" />
    ];
    return (
      <Router>
        <div>
          <GlobalHeaderContainer />
          <Switch>{authorized ? auth : notAuth}</Switch>
            <GlobalFooter />
        </div>
      </Router>
    );
  }
}

export default connect(state => ({ authorized: state.authorized, id: state.id }), null)(App);