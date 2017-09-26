import req from 'superagent';
require('dotenv').config();
const SEARCH_API_URL = process.env.REACT_APP_SEARCH_API_URL || '/api';

export default {
  search({ payload }) {
    const {token} = payload;
    return req
      .post(`${SEARCH_API_URL}/search`)
      .send({payload})
      .set('Authorization', token)
      .then(searchResults => {
        return searchResults.body;
      });
  }
};
