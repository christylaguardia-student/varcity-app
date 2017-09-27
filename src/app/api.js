import req from 'superagent';
require('dotenv').config();
const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL || '/api/auth';

export default {
  signUpNewUser({ payload }) {
    return req
      .post(`${AUTH_API_URL}/signup`)
      .send(payload)
      .then(newUser => {
        return newUser;
      });
  },
  signIn({ payload }) {
    const { email, password } = payload || '';
    const { token } = payload || '';

    return req
      .post(`${AUTH_API_URL}/signin`)
      .send({ email, password })
      .set('Authorization', token)
      .then(response => {
        return response.body;
      });
  },
  retrieveWithToken(token) {
    return req
      .post(`${AUTH_API_URL}/tokenator`)
      .send({ token })
      .then(response => {
        return response.text;
      });
  }
};
