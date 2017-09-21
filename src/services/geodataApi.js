import { request } from './_request';

export const API_URL = '/geodata';

export default {
  getCountries() {
    return request.get(`${API_URL}/countries`);
  },
  getRegions(country) {
    return request.get(`${API_URL}/regions?country=${country}`);
  },
  getCities(country, region) {
    return request.get(`${API_URL}/regions?country=${country}&region=${region}`);
  }
}
