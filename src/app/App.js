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
    const { authId } = this.props;
    console.log(22, authId)
    if (authId) {
      routes = [
        <Route key="1" exact path="/about" component={About} />,
        <Route key="4" path={`/athletes/${authId}`} component={ProfileContainer} />,
        <Route key="3" exact path="/athletes" component={SearchContainer} />,
        <Redirect key="5" to={`/athletes/${authId}`} />
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

export default connect(
  state => ({ authId: state.authId }),
  null
)(App);

