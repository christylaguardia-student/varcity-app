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
import { connect } from 'react-redux';
import { retrieveWithToken } from './actions';
import 'bulma/css/bulma.css';
import '../styles/index.css';
import About from '../home/About';
import Contact from '../home/Contact';
import News from '../home/News';
import Privacy from '../home/Privacy';
import Resources from '../home/Resources';
import TermsOfUse from '../home/TermsOfUse';

class App extends Component {
  componentWillMount() {
    this.props.retrieveWithToken();
  }

  render() {
    let routes = null;

    const { authId } = this.props;

    if (authId && Object.entries(authId).length !== 0) {
      routes = [
        <Route key="3" path="/athletes/:id" component={ProfileContainer} />,
        <Route key="2" path="/search" component={Search} />,
        <Redirect key="5" to={`/athletes/${authId}`} />
      ];
    } else {
      routes = [
        <Route key="4" exact path="/" component={Home} />,
        <Route key="5" exact path="/about" component={About} />,
        <Route key="6" exact path="/news" component={News} />,
        <Route key="7" exact path="/resources" component={Resources} />,
        <Route key="8" exact path="/terms" component={TermsOfUse} />,
        <Route key="8" exact path="/privacy" component={Privacy} />,
        <Route key="9" exact path="/contact" component={Contact} />,
        <Redirect key="10" to="/" />
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
