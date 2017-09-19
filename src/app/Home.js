import React from 'react';
import PropTypes from 'prop-types';
import { signIn, signUp } from './actions';
import { connect } from 'react-redux';

export function Home({signIn, signUp}) {

  Home.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    signUp: PropTypes.func,
    signIn: PropTypes.func
  };

  return (
    <div>
      <h1>Welcome to Varcity Network</h1>
      <h3>Join Now! It's Free!</h3>
      <div>
        <div> Sign Up </div>
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
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="password" placeholder="password" />
          <button type="submit" name="submit" />
        </form>

        <div> Sign In </div>
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
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="password" placeholder="password" />
          <button type="submit" name="submit" />
        </form>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (email, password) => {
      dispatch(signUp(email, password));
    },
    signIn: (email, password) => {
      dispatch(signIn(email, password));
    }
  };
}

function mapStateToProps(state) {
  return {
    id: state.id,
    authorized: state.authorized
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
