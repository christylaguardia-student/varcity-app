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
      // const id = this.props.location.pathname.split('/athletes/')[1];

      routes = [
        <Route key="1" path="/about" component={About} />,
        <Route key="2" path="/search" component={SearchContainer} />,
        <Route key="3" path="/athletes/:id" component={ProfileContainer} />,
        <Redirect key="5" to={`/athletes/${authId}`} />
      ];
    } else {
      routes = [
        <Route key="1" exact path="/" component={Home} />,
        <Route key="2" path="/about" component={About} />,
        <Redirect  key="3" to="/" />
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

export default connect(state => ({ authId: state.authId, errorMessage: state.errorMessage }), mapDispatchToProps)(
  App
);
