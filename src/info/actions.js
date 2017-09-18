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
          return countries.map((country, index) => {
            return { id: index, text: country };
          })
        })
        .then(countries => dispatch({ type: actions.GET_COUNTRIES, payload: countries }))
    }
  }
}

export const getCountries = makeGetCountries(geodataApi);
