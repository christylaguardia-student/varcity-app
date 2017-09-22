import React from 'react';
import { Link } from 'react-router-dom';

export default function GlobalHeader({ authId, search, signOut }) {
  return (
    <div className="navbar-menu level is-fluid"
      aria-label="main navigation">
      <div className="navbar-brand level-item">
        <Link className="navbar-item" to="/">
          <i className="fa fa-home fa-2x" />
        </Link>
        <button className="button navbar-burger">
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="navbar-menu level-item">
        <div className="navbar-start">
          <div className="navbar-item">
            <form
              onSubmit={event => {
                event.preventDefault();
                const form = event.target;
                const { searchValue } = form.elements;
                search({
                  payload: { payload: searchValue.value }
                });
                form.reset();
              }}>
              <input name="searchValue" />
              <button
                className="button is-primary is-outlined"
                type="submit"
                name="submit">
                Search{' '}
              </button>
            </form>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <form
              onSubmit={event => {
                event.preventDefault();
                const form = event.target;
                signOut({
                  payload: { payload: null }
                });
                form.reset();
              }}>
              <button
                className="button is-primary is-outlined"
                type="submit"
                name="submit">
                Logout
              </button>
            </form>
          </div>
          <div className="navbar-item">
            <Link to={`/athletes/${authId}`}>P</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
