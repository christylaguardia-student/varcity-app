import req from 'superagent';
require('dotenv').config();
const AUTH_API_URL = process.env.REACT_APP_SEARCH_API_URL || '/api/search';

export default {
  search({ payload }) {
    return req
      .post(`${AUTH_API_URL}`)
      .send(payload)
      .then(searchResults => {
        console.log(55, searchResults);
        return searchResults;
      });
  }
};
