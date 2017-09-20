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
import { signIn } from './actions';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authId: ''
    };

  }

  async checkForToken() {
    const storage = localStorage;
    const token  = storage.getItem('varcity') || '';
    if (token !== '') {
      const user = await signIn({token: token});
    }
  }

  render() {

    let routes = null;
    const { authId, signIn } = this.props;
    this.checkForToken();


    if (authId && Object.entries(authId).length !== 0) {
      routes = [
        <Route key="1" exact path="/about" component={About} />,
        <Route key="3" exact path="/athletes" component={SearchContainer} />,
        <Route
          key="4"
          path={`/athletes/${authId}`}
          component={ProfileContainer}
        />,
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

function mapDispatchToProps(dispatch) {
  return {
    signIn: ({ payload }) => {
      dispatch(signIn({ payload }));
    }
  };
}

export default connect(state => ({ authId: state.authId }), mapDispatchToProps)(
  App
);
