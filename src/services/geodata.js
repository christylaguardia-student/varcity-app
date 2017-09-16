import request from 'superagent';

const API_URL = 'https://geodata.solutions/restapi';

module.exports = {
  getCountries() {
    request
      .get(`${API_URL}?country`)
      .then(countries => countries.map(c => c.country_name))
  }
}