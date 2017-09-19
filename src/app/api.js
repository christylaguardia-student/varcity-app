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
  signIn( token ) {
    return req
      .post(`${AUTH_API_URL}/signin`)
      .set('Authorization', token)
      .then(response => {
        return response.body.user;
      });
  },
  changeField(payload) {
    console.log('changeField: ', payload);
    return req
      .post(`${AUTH_API_URL}/change`)
      .send(payload)
      .then(response => {
        return response.body;
      });
  },
  verify() {
    return req.get(`${AUTH_API_URL}/verify`).then(verifiedUser => {
      return verifiedUser;
    });
  }
};
