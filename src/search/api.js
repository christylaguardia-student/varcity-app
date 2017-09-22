import req from 'superagent';
require('dotenv').config();
const SEARCH_API_URL = process.env.REACT_APP_SEARCH_API_URL || '/api';

export default {
  search({ payload }) {
    console.log(10, payload)
    const {searchTerm, id} = payload;
    return req
      .post(`${SEARCH_API_URL}/${id}/search`)
      .send(searchTerm)
      .then(searchResults => {
        console.log(22, searchResults)
        return searchResults.body;
      });
  }
};
