import superagent from 'superagent';

export const API_URL = '/api/geodata'

const wrap = cmd => cmd
.then(res => {
  console.log('API response', res.body);
  return res.body;
},
({ response }) => {
  throw response.body.error;
});

export default {
  getCountries() {
    return wrap(superagent.get(`${API_URL}/countries`));
  },

  getRegions(country) {
    return wrap(superagent.patch(`${API_URL}/regions?country=${country}`));
  },

  getCities(country, region) {
    return wrap(superagent.patch(`${API_URL}/regions?country=${country}&region=${region}`));
  }
}
