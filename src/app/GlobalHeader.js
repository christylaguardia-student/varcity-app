import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import SearchContainer from '../search/SearchContainer';
import MediaGallery from '../media/MediaGallery';
import ProfileContainer from './ProfileContainer';
import { signIn, signUp, httpCallback, signout } from './actions';

export default function GlobalHeader({ authId, signOut }) {
  console.log(1, authId);
  return (
    <div className="border">
      <div>Global header!</div>
      <div>
        {authId &&
      <div>
        <div> Sign Out </div>
        <form
          onSubmit={event => {
            event.preventDefault();
            const form = event.target;
            signOut({
              payload: { payload: null }
            });
            form.reset();
          }}>
          <button type="submit" name="submit">log out</button>
        </form>
      </div>}
      </div>
      <div>
          <div>
            <ul>
              <li>
                <Link to="/">Home in the global header</Link>
              </li>
              <li>
                <input placeholder="search" />
              </li>
              <li>
                <Link to="/athletes">Search</Link>
              </li>
              <li>
                <Link to={`/athletes/${authId}`}>Profile</Link>
              </li>
            </ul>
          </div>

      </div>
    </div>
  );
}
