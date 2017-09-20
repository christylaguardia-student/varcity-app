import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from './actions';

export default function GlobalHeader({ id, authorized, signOut }) {
  console.log(1, id, authorized);
  return (
    <div className="navbar-menu is-active">
      <div className="navbar-start">
        {authorized &&
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            const form = event.target;
            signOut({
              payload: { payload: null }
            });
            form.reset();
          }}>
          <button className="button is-primary is-outlined" type="submit" name="submit">Logout</button>
        </form>
      </div>}
      </div>
      <div>
        <div>
          <ul>
            <li>
              <Link to="/"><i className="fa fa-home fa-2x"></i></Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <input placeholder="search" />
            </li>
            <li>
              <Link to="/athletes">Search</Link>
            </li>
            <li>
              <Link to={`/athletes/${id}`}>Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}