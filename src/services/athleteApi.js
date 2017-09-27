import superagent from 'superagent';

const API_URL = '/api/athletes';

export default {

  getInfoById(id) {
    const token = localStorage.getItem('varcity');
    return superagent
      .get(`${API_URL}/${id}`)
      .set('Authorization', token)
      .then(res => res.body);
  },

  updateInfoById(id, data) {
    const token = localStorage.getItem('varcity');
    return superagent
      .patch(`${API_URL}/${id}`)
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
    return superagent
      .patch(`${API_URL}/${id}/media`)
      .set('Authorization', token)
      .send(data)
      .then(res => res.body);
  },
  
  getEduById(id) {
    const token = localStorage.getItem('varcity');
    return superagent
      .get(`${API_URL}/${id}/edu`)
      .set('Authorization', token)
      .then(res => res.body);
  },

  updateSchoolsById(id, data) {
    const token = localStorage.getItem('varcity');
    return superagent
      .patch(`${API_URL}/${id}/edu`)
      .set('Authorization', token)
      .send(data)
      .then(res => res.body);
  },

  updateTestScoresById(id, data) {
    const token = localStorage.getItem('varcity');
    return superagent
      .patch(`${API_URL}/${id}/edu`)
      .set('Authorization', token)
      .send(data)
      .then(res => res.body);
  },

  getSportsById(id) {
    const token = localStorage.getItem('varcity');
    return superagent
      .get(`${API_URL}/${id}/sport`)
      .set('Authorization', token)
      .then(res => res.body);
  },
  
  updateSportsById(id, data) {
    const token = localStorage.getItem('varcity');
    return superagent
      .patch(`${API_URL}/${id}/sport`)
      .send(data)
      .set('Authorization', token)
      .then(res => res.body);
  }
};
