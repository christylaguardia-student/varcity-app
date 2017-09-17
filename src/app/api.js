import req from 'superagent';
require('dotenv').config()
const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;

export default {
  async signUpNewUser({payload}) {
    console.log('signup app: ', payload)
    const newUser = await req
      .post(`${AUTH_API_URL}/signup`)
      .send(payload)

        console.log('newUser: ', newUser)
        return newUser

  },
  signIn({payload}) {
    return req
    .post(`${AUTH_API_URL}/signin`)
    .send(payload)
    .then(response => {
      return response.body
    })
  },
  changeField(payload) {
    console.log('changeField: ', payload)
    return req
    .post(`${AUTH_API_URL}/change`)
    .send(payload)
    .then(response => {
      return response.body
    })
  },
    verify() {
      return req
      .get(`${AUTH_API_URL}/verify`)
      .then(verifiedUser => {
        return verifiedUser
      })

  }
};

