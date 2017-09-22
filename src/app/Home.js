import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signIn, signUp } from './actions';
import { connect } from 'react-redux';

export function Home({signIn, signUp, authId}) {

  Home.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    signUp: PropTypes.func,
    signIn: PropTypes.func
  };

  return (
    <div id="home" className="columns main-container padded-container level">
      
      <div className="column">
      </div>
      
      <div className="column content is-fluid">
        <h1 className="title">Varcity Network</h1>
        <p className="subtitle">Connecting student athletes to success.</p>

        <figure>
          <img src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/B65VCAYIUF.jpg" alt="Varcity Network" />
        </figure>

        <p><Link to="/about">Learn More</Link></p>
      </div>
      
      <div className="column is-one-third content is-fluid">
        <div className="padded-container">
          <h3>Join Now! It's Free!</h3>
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
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" name="email" placeholder="email" />
              <span className="icon is-small is-left">
                <i className="fa fa-user"></i>
              </span>
            </div>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="password" name="password" placeholder="password" />
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
            </div>
            <button className="button is-primary is-outlined" type="submit" name="submit">Sign Up</button>
          </form>
        </div>

        <div className="padded-container">
          <h3>Login</h3>
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
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" name="email" placeholder="email" />
              <span className="icon is-small is-left">
                <i className="fa fa-user"></i>
              </span>
            </div>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="password" name="password" placeholder="password" />
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
            </div>
            <button className="button is-primary is-outlined" type="submit" name="submit">Sign In</button>
          </form>
        </div>
      </div>

      <div className="column">
      </div>

    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: ({payload}) => {
      dispatch(signUp({payload}));
    },
    signIn: ({payload}) => {
      dispatch(signIn({payload}));
    }
  };
}

function mapStateToProps(state) {
  return {
    authId: state.authId
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
