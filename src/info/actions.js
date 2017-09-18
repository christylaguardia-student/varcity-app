import * as actions from './constants';
import geodataApi from '../services/geodataApi';

// TODO 
// import athleteApi from '../services/athleteApi';

// export function makeUpdateAthlete(api) {
//   return function updateAthlete(athleteData) {
//     return dispatch => {
//       return api
//         .update(athleteData)
//         .then(athlete => dispatch({ type: actions.ATHLETE_UPDATED, payload: athlete }))
//     }
//   }
// }

export function makeGetCountries(api) {
  return function getCountries() {
    return dispatch => {
      return api
        .getCountries()
        .then(countries => {
          let riekList = [];
          countries.forEach((country, index) => {
            riekList.push({ id: index, text: country });
          });
          return riekList;
        })
        .then(countries => dispatch({ type: actions.GET_COUNTRIES, payload: countries }));
    };
  };
}

export const getCountries = makeGetCountries(geodataApi);

export function makeGetRegions(api) {
  return function getRegions(country) {
    return dispatch => {
      return api
        .getRegions()
        .then(regions => {
          let riekList = [];
          regions.forEach((region, index) => {
            riekList.push({ id: index, text: region });
          });
          return riekList;
        })
        .then(regions => dispatch({ type: actions.GET_REGIONS, payload: regions }));
    };
  };
}

export const getRegions = makeGetRegions(geodataApi);

export function makeGetCities(api) {
  return function getCities(country, region) {
    return dispatch => {
      return api
        .getCities()
        .then(cities => {
          let riekList = [];
          cities.forEach((city, index) => {
            riekList.push({ id: index, text: city });
          });
          return riekList;
        })
        .then(cities => dispatch({ type: actions.GET_CITIES, payload: cities }));
    };
  };
}

export const getCities = makeGetCities(geodataApi);
