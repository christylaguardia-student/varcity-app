import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signIn, signUp } from './actions';
import { connect } from 'react-redux';

export function Home({ signIn, signUp, authId }) {
  Home.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    signUp: PropTypes.func,
    signIn: PropTypes.func
  };

  return (
    <div id="home" className="columns level">
      <div className="column is-fluid is-6 padded-container">
        <h1 className="title">Varcity Network</h1>
        <p className="subtitle">Connecting student athletes to success.</p>

        <figure>
          <img
            src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/B65VCAYIUF.jpg"
            alt="Varcity Network"
          />
        </figure>

        <p>
          <Link to="/about">Learn More</Link>
        </p>
      </div>

      <div className="column is-fluid is-6 padded-container">
      <div className="field">
        <h3>Join Now! It's Free!</h3>
        </div>

        <form
          onSubmit={event => {
            event.preventDefault();
            const form = event.target;
            const { email, password } = form.elements;
            signUp({
              payload: { email: email.value, password: password.value }
            });
            form.reset();
          }}>
          <div className="field">

          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              name="email"
              placeholder="email"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-user" />
            </span>
          </div>
          </div>
          <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="password"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-lock" />
            </span>
          </div>
          </div>
          <div className="field">

          <div className="control">
          <button
            className="button is-primary is-outlined"
            type="submit"
            name="submit">
            Sign Up
            </button>
            </div>
            </div>
        </form>
        </div>

      </div>

  );
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: ({ payload }) => {
      dispatch(signUp({ payload }));
    },
    signIn: ({ payload }) => {
      dispatch(signIn({ payload }));
    }
  };
}

function mapStateToProps(state) {
  return {
    authId: state.authId
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
