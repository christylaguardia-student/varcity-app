import superagent from 'superagent';
export const API_URL = '/api';

const wrapper = (cmd, token) => {
  cmd.set('Authorization', token).then(
    res => res.body,
    ({ response }) => {
      const { body, text } = response;
      const error = body ? body.error || body : text;
      throw error;
    }
  );
};

export const request = {
  get(url) {
    const storage = localStorage;
    const token = storage.getItem('varcity');
    return wrapper(superagent.get(`${API_URL}${url}`), token);
  },
  post(url, data) {
    return wrapper(superagent.post(`${API_URL}${url}`).send(data));
  },
  patch(url, data) {
    const token = localStorage.getItem('varcity');
    return wrapper(superagent.patch(url).send(data), token);
  }
};
