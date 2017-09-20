import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Info from '../info/Info';
import SportsContainer from '../sports/SportsContainer';
import EduContainer from '../edu/EduContainer';
import MediaGallery from '../media/MediaGallery';

class ProfileContainer extends Component {

  render() {
    const id = this.props.location.pathname.split('/athletes/')[1];
    return (
      <Router>
        <div>
          <div className="navbar is-transparent is-boxed">
            <Link className="navbar-item" to={`/athletes/${id}`}>Info</Link>
            <Link className="navbar-item" to={`/athletes/${id}/sports`}>Sports</Link>
            <Link className="navbar-item" to={`/athletes/${id}/edu`}>Education</Link>
            <Link className="navbar-item" to={`/athletes/${id}/media`}>Media</Link>
            <hr className="navbar-divider" />
          </div>
          <Switch>
            <Route path={`/athletes/${id}`} component={Info} />
            <Route path={`/athletes/${id}/sports`} component={SportsContainer} />
            <Route path={`/athletes/${id}/edu`} component={EduContainer} />
            <Route path={`/athletes/${id}/media`} component={MediaGallery} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default connect(state => ({ id: state.id }), null)(ProfileContainer);

