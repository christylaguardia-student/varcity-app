import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export function GlobalHeader({
  authId,
  search,
  searchDb,
  signOut,
  signIn,
  gotResults,
  history,
  currentId
}) {
  const headerStyle = {
    marginBottom: 20,
    borderBottom: '1px solid lightgrey'
  };

  const columns = {
    marginBottom: 6
  };
  return (
    <div style={headerStyle}>
      <div className="">
        {authId &&
        Object.entries(authId).length !== 0 && (
            <div className="columns" style={columns}>
              <div className="column is-2">
                <Logo />
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
              </div>
            </div>
          )}
          
        {/* <div className="tabs">
          <Link to="/about">About</Link>
          <Link to="/news">News</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div> */}
      </div>
      <div>
        {!authId && (
          <div className="tabs">
            <Logo />
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        )}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="logo">Varcity</Link>
  );
}

const mapStateToProps = state => {
  return {
    authId: state.authId,
    search: state.search
  };
};

export default withRouter(connect(mapStateToProps, null)(GlobalHeader));
