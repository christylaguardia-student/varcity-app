import React, { Component } from 'react';
import GlobalFooter from './GlobalFooter';
import GlobalHeaderContainer from './GlobalHeaderContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import SearchContainer from './SearchContainer';
import ProfileContainer from './ProfileContainer';
import Home from './Home';
import About from './About';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    let routes = null;
    const { authorized } = this.props;

    if (authorized) {
      routes = [
        <Route key="1" exact path="/about" component={About} />,
        <Route key="3" exact path="/athletes" component={SearchContainer} />,
        <Route key="4" exact path="/athletes/:id" component={ProfileContainer} />,
        <Redirect key="5" to={`/athletes/${authorized._id}`} />
      ];
    } else {
      routes = [
        <Route key="1" exact path="/" component={Home} />,
        <Route key="1" exact path="/about" component={About} />,
        <Redirect key="2" to="/" />
      ];
    }

    return (
      <Router>
        <div>
          <GlobalHeaderContainer />
          <Switch>{routes}</Switch>
          <GlobalFooter />
        </div>
      </Router>
    );
  }
}

export default connect(state => ({ authorized: state.authorized }), null)(App);