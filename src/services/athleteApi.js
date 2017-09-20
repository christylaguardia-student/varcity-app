import { request } from './_request';

const API_URL = '/athletes';

export default {
  get(id, tab = '') {
    return request.get(`${API_URL}/${id}/${tab}`).catch(err => console.log(err));
  },
  update(id, data, tab = '') {
    return request.patch(`${API_URL}/${id}/${tab}`, data).catch(err => console.log(err));
  }
};
