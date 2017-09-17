import superagent from 'superagent';

export const API_URL = '/api/athletes/'

const wrap = cmd => cmd
.then(res => {
  console.log('API response', res.body);
  return res.body;
},
({ response }) => {
  throw response.body.error;
});

export default {
  get(id) {
    return wrap(superagent.get(`${API_URL}/${id}`));
  },

  update(id, data) {
    return wrap(superagent.patch(`${API_URL}/${id}`).send(data));
  }

  // TODO: search

}
