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
    const { email, password, token } = payload || '';
    // if (token) {
    //   const storage = localStorage;
    //   storage.setItem('varcity', token);
    // }
    return req
      .post(`${AUTH_API_URL}/signin`)
      .send({ email, password })
      .set('Authorization', token)
      .then(response => {

        return response.body;
      });
  },
  changeField(payload) {
    return req
      .post(`${AUTH_API_URL}/change`)
      .send(payload)
      .then(response => {
        // return response.body;
      });
  },
  verify() {
    return req.get(`${AUTH_API_URL}/verify`).then(verifiedUser => {
      return verifiedUser;
    });
  }
};
