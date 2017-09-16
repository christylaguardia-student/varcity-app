import React from 'react';
import superagent from 'superagent';

const API_URL = 'https://geodata.solutions/restapi';

// Note: "state" represents a regional block.
// For example, in the Philippines
// provinces are provided as regionalBlocs
// and can be queried by using the "state" parameter

module.exports = {
  
  getCountries() {
    return superagent
      .get(`${API_URL}?country`)
      .then(res => {
        const results = JSON.parse(res.text);
        const keys = Object.keys(results).filter(k => k !== 'appendix');
        const states = keys.map(key => results[key].country_name);
        return states;
      });
    },

  getStates(country) {
    return superagent
      .get(`${API_URL}?country=${country}`)
      .then(res => {
        const results = JSON.parse(res.text);
        const states = results.details.regionalBlocs.map(r => r.state_name);
        return states;
      });
    },
    
    getCities(country, state) {
      return superagent
        .get(`${API_URL}?country=${country}&state=${state}`)
        .then(res => {
          const results = JSON.parse(res.text);
          const keys = Object.keys(results).filter(k => k !== 'appendix');
          const cities = keys.map(key => results[key].city_name);
          return cities;
        });
  }
}
