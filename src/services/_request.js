import superagent from 'superagent';

export const API_URL = '/api';


const token = localStorage.getItem('varcity');

export const request =  {
  get(url) {
    return superagent.get(`${API_URL}${url}`).set('Authorization', token).then(res => res.body);
  },
  post(url, data) {
    return superagent.post(`${API_URL}${url}`).send(data).set('Authorization', token).then(res => res.body);
  },
  patch(url, data) {
    return superagent.patch(`${API_URL}${url}`).send(data).set('Authorization', token).then(res => res.body);
  },
  delete(url) {
    return superagent.delete(`${API_URL}${url}`).set('Authorization', token);
  }
};