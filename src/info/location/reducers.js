import * as actions from './constants';

export function location(state = { countries: [], regions: [], cities: [] }, { type, payload }) {
  switch(type) {
    case actions.GET_COUNTRIES:
      return { countries: payload, regions: [], cities: [] };
    case actions.GET_REGIONS:
      return { countries: state.countries, regions: payload, cities: [] };
    case actions.GET_CITIES:
      return { countries: state.countries, regions: state.regions, cities: payload };
    default:
      return state;
  }
}
