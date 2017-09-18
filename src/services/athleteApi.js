import { request } from './_request';

const API_URL = '/athletes';

export default {
  get(id) {
    return request.get(`${API_URL}/${id}`);
  },
  update(id, data) {
    return request.patch(`${API_URL}/${id}`, data);
  }
};
