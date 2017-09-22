import { request } from './_request';
import superagent from 'superagent';

const API_URL = '/athletes';

export default {
  get(id, tab = '') {
    return request.get(`${API_URL}/${id}/${tab}`).catch(err => console.log(err));
  },
  update(id, data, tab = '') {
    return request.patch(`${API_URL}/${id}/${tab}`, data).catch(err => console.log(err));
  },
  updateSportById(id, data) {
    const token = localStorage.getItem('varcity');
    return superagent
    .patch(`${API_URL}/${id}/sports`)
    .send(data)
    .set('Authorization', token)
    .then(res => res.body)
    
  }
};
