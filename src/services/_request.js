import superagent from 'superagent';
import store from '../store/index';

export const API_URL = '/api';
// let token = '';

// store.subscribe(() => {
//   const { token: newToken } = store.getState().auth;

//   if (newToken !== token) {
//     token = newToken;
//     token ? localStorage.token = token : localStorage.clear('token');
//   }
// });

const wrapper = cmd => cmd
  // .set('Authorization', token)
  .then(res => res.body,
    ({ response }) => {
      const { body, text } = response;
      const error = body ? body.message || body.error || body : text;
      throw error;
    }
  );

// export const getStoredToken = () => localStorage.token; 

export const request =  {
  get(url) {
    return wrapper(superagent.get(`${API_URL}${url}`));
  },
  post(url, data) {
    return wrapper(superagent.post(`${API_URL}${url}`).send(data));
  },
  patch(url, data) {
    return wrapper(superagent.patch(`${API_URL}${url}`).send(data));
  },
  delete(url) {
    return wrapper(superagent.delete(`${API_URL}${url}`));
  }
};