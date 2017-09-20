import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from './actions';

export default function GlobalHeader({ authId, signOut }) {
  return (
    <div className="border">
      <div>Global header!</div>
      <div>
        {(authId && Object.entries(authId).length !== 0) &&
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