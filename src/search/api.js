import req from 'superagent';
require('dotenv').config();
const SEARCH_API_URL = process.env.REACT_APP_SEARCH_API_URL || '/api';

export default {
  search({ payload }) {
    console.log(10, payload)
    const {authId} = payload;
    return req
      .post(`${SEARCH_API_URL}/${authId}/search`)
      .send({payload})
      .then(searchResults => {
        console.log(22, searchResults.body)
        return searchResults.body;
      });
  }
};
