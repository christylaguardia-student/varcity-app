import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export function GlobalHeader({
  authId,
  getInfo,
  search,
  searchDb,
  signOut,
  signIn,
  gotResults,
  history,
  currentId,id
})
{
console.log(400, currentId, id, authId)

  const headerStyle = {
    marginBottom: 20,
    borderBottom: '1px solid lightgrey'
  };

  const columns = {
    marginBottom: 6
  };
  return (
    <div style={headerStyle}>
      <div>
        {authId &&
        Object.entries(authId).length !== 0 && (
          <div className="columns" style={columns}>
            <div className="column is-2">
              <Link to="/">
                <h3 className="logo">Varcity</h3>
                <i className="fa fa-home fa-2x" />
              </Link>
              <Link to="/about">About</Link>
            </div>
            <div className="column is-8">
              <form
                onSubmit={event => {
                  event.preventDefault();
                  const form = event.target;
                  const searchValue = form.elements[0].value;
                  searchDb({
                    payload: { searchValue: searchValue, authId: authId }
                  });
                  form.reset();
                  history.push('/search');
                }}>
                <div className="field has-addons">
                  <div className="control has-icons-left is-expanded">
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
                </div>
              </form>
            </div>

            <div className="column is-2">
              <form
                onSubmit={event => {
                  event.preventDefault();
                  const form = event.target;
                  signOut({
                    payload: { payload: null }
                  });
                  form.reset();
                }}>
                <div className="field">
                  <button
                    className="button is-primary is-outlined"
                    type="submit"
                    name="submit">
                    Logout
                  </button>
                </div>
              </form>

              <div>
                <Link to={`/athletes/${authId}`}>My Profile</Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {!authId && (
          <div className="columns level">
            <div className="column is-8 level-left">
              <Link to="/">
                <h3 className="logo">Varcity</h3>
                <i className="fa fa-home fa-2x" />
              </Link>
              <Link to="/about">About</Link>
            </div>

            <div className="column is-4 level-right">

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    authId: state.authId,
    search: state.search,
    currentId: state.currentId
    };
};

export default withRouter(connect(mapStateToProps, null)(GlobalHeader));
