import React, { Component } from 'react';
import GlobalFooter from './GlobalFooter';
import GlobalHeaderContainer from './GlobalHeaderContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Search from '../search/Search';
import ProfileContainer from './ProfileContainer';
import Home from './Home';
import About from './About';
import { connect } from 'react-redux';
import { retrieveWithToken } from './actions';
import 'bulma/css/bulma.css';
import '../styles/index.css';

class App extends Component {
  componentWillMount() {
    this.props.retrieveWithToken();
  }

  render() {
    let routes = null;

    const { authId } = this.props;

    if (authId && Object.entries(authId).length !== 0) {
      routes = [
        <Route key="1" path="/about" component={About} />,
        <Route key="3" path="/athletes/:id" component={ProfileContainer} />,
        <Route key="2" path="/search" component={Search} />,
        <Redirect key="5" to={`/athletes/${authId}`} />
      ];
    } else {
      routes = [
        <Route key="4" exact path="/" component={Home} />,
        <Route key="6" path="/about" component={About} />,
        <Redirect key="7" to="/" />
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

function mapDispatchToProps(dispatch) {
  return {
    retrieveWithToken: () => {
      dispatch(retrieveWithToken());
    }
  };
}

export default connect(state => ({ authId: state.authId }), mapDispatchToProps)(
  App
);
