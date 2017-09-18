import React from 'react';
import PropTypes from 'prop-types';

export default function Home({signIn, signUp, httpCallback, value}) {
  console.log(signIn, signUp, httpCallback, value)
  Home.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    signUp: PropTypes.func,
    signIn: PropTypes.func,
    value: PropTypes.string,
    httpCallback: PropTypes.func
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

