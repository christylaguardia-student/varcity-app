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
    let { email, password, token } = '';
    if (payload.email) email = payload.email;
    if (payload.password) password = payload.password;
    if (payload.token) token = payload.token;

    return req
      .post(`${AUTH_API_URL}/signin`)
      .send({email, password})
      .set('Authorization', token)
      .then(response => {
        console.log(10, response);
        return response.body.token;
      });
  },
  changeField(payload) {
    console.log('changeField: ', payload);
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
