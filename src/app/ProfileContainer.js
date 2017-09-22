import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SportPage from '../sports/SportPage';
import InfoContainer from '../info/InfoContainer';
import EduPresentation from '../edu/EduPresentation';
import MediaGallery from '../media/MediaGallery';

class ProfileContainer extends Component {

  render() {
    const id = this.props.location.pathname.split('/athletes/')[1];
    
    return (
      <Router>
        <div>
          <div className="tabs is-centered is-medium">
            <ul>
              <li><Link to={`/athletes/${id}`}>Info</Link></li>
              <li><Link to={`/athletes/${id}/sports`}>Sports</Link></li>
              <li><Link to={`/athletes/${id}/edu`}>Education</Link></li>
              <li><Link to={`/athletes/${id}/media`}>Media</Link></li>
            </ul>
          </div>

          <Switch>
            <div className="columns main-container">
              <div className="column"></div>
              <div className="column is-two-thirds">
                <Route exact path="/athletes/:id" component={InfoContainer} />
                <Route path="/athletes/:id/sports" component={SportPage} />
                <Route path="/athletes/:id/edu" component={EduPresentation} />
                <Route path="/athletes/:id/media" component={MediaGallery} />
              </div>
              <div className="column"></div>
            </div>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default connect(state => ({ id: state.id }), null)(ProfileContainer);
