import superagent from 'superagent';
import { request } from './_request';

const API_URL = '/api/athletes';

export default {
  getInfoById(id) {
    const token = localStorage.getItem('varcity');
    return superagent
      .get(`${API_URL}/${id}/info`)
      .set('Authorization', token)
      .then(res => res.body);
  },
  get(id, tab = '') {
<<<<<<< Updated upstream
=======
    console.log(111, API_URL, id, tab)
>>>>>>> Stashed changes
    return request.get(`${API_URL}/${id}/${tab}`);
  },
  update(id, data, tab = '') {
    return request.patch(`${API_URL}/${id}/${tab}`, data);
  }
};
