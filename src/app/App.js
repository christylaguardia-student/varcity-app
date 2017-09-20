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
    console.log('this.props',this.props);
    const { authorized, id } = this.props;

    if (authorized) {
      routes = [
        <Route key="1" exact path="/about" component={About} />,
        <Route key="4" path="/athletes/:id" component={ProfileContainer} />,
        <Route key="3" path="/athletes" component={SearchContainer} />,
        <Redirect key="5" to={`/athletes/${id}`} />
      ];
    } else {
      routes = [
        <Route key="1" exact path="/" component={Home} />,
        <Route key="1" path="/about" component={About} />,
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

export default connect(state => ({ authorized: state.authorized}), null)(App);