import React from 'react';
import PropTypes from 'prop-types';
import { signIn, signUp } from './actions';
import { connect } from 'react-redux';
import Testimonials from '../home/Testimonials';

export function Home({ signIn, signUp, authId }) {
  Home.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    signUp: PropTypes.func,
    signIn: PropTypes.func
  };

  return (
    <div>
      <section className="columns level">
        <div className="column"></div>
        <div className="column is-fluid is-6 padded-container">
          <h2 className="title">Connecting student athletes to success.</h2>
          <p className="subtitle">Meet recruiters, get connected with players, show off your athletic and educational skills.</p>
          <figure>
            <img
              src="https://d193o8p26ehxdy.cloudfront.net/img-thumbs/960w/WFMM0O6D9V.jpg"
              alt="Varcity Network"
            />
          </figure>
        </div>

        <div className="column is-fluid is-6 padded-container">
          <div className="box padded-container">
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
          <div className="box padded-container">

            <div className="field">
              <h3>Sign In!</h3>
            </div>
            <form
              onSubmit={event => {
                event.preventDefault();
                const form = event.target;
                const { email, password } = form.elements;
                signIn({
                  payload: { email: email.value, password: password.value }
                });
                form.reset();
              }}>
              <div className="field">
                <div className="control has-icons-left has-icons-right">
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
                <div className="control has-icons-left has-icons-right">
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
                <button
                  className="button is-primary is-outlined"
                  type="submit"
                  name="submit">
                Sign In
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="column"></div>
      </section>

      <section>
        <Testimonials />
      </section>
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
