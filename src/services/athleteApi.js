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
  updateInfoById(id, data) {
    const token = localStorage.getItem('varcity');
    return superagent
      .patch(`${API_URL}/${id}/info`)
      .send(data)
      .set('Authorization', token)
      .then(res => res.body);
  },
  getMediaById(id) {
    const token = localStorage.getItem('varcity');
    return superagent
      .get(`${API_URL}/${id}/media`)
      .set('Authorization', token)
      .then(res => res.body);
  },
  updateMediaById(id, data) {
    const token = localStorage.getItem('varcity');
    // if (data.mediaType === 'Video Link') {
    return superagent
      .patch(`${API_URL}/${id}/media`)
      .set('Authorization', token)
      .send(data)
      .then(res => res.body);
    // }
    // else if (data.mediaType === 'Image Upload') {
    //   return superagent
    //   .patch(`${API_URL}/${id}/media`)
    //   .set('Authorization', token)
    //   .attach('image', data.image, 'image.jpg')
    //   .field('description', data.description)
    //   .field('mediaType', data.mediaType)
    //   .then(res => res.body);
    // }
  },
  get(id, tab = '') {
    return request.get(`${API_URL}/${id}/${tab}`);
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
