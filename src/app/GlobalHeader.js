import React from 'react';
import { Link } from 'react-router-dom';

export default function GlobalHeader({ authId, search, signOut }) {
  return (
    <div>
      <div className="columns">

        <div className="column">
          <Link to="/">
          <h3 className="logo">Varcity</h3>

            {/* <i className="fa fa-home fa-2x" /> */}
          </Link>
          <Link to="/about">About</Link>

        </div>

        <div className="column">
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
            <div className="control has-icons-left">
              <input className="input" placeholder="Search" />
              <span className="icon is-small is-left">
                <i className="fa fa-search" />
              </span>
            </div>
            <button
              className="button is-primary is-outlined"
              type="submit"
              name="submit">
              Search{' '}
            </button>
          </form>
        </div>

        <div className="column">
        </div>

        <div className="column">
          {authId &&
          Object.entries(authId).length !== 0 && (
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
                <button
                  className="button is-primary is-outlined"
                  type="submit"
                  name="submit">
                  Logout
                </button>
              </form>
            </div>
          )}
          <Link to={`/athletes/${authId}`}>My Profile</Link>
        </div>
      </div>
      <div className="column">
        <Link to="/">
          <i className="fa fa-home fa-2x" />
        </Link>
      </div>
      <div className="column">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
