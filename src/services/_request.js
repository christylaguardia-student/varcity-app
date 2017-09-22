import superagent from 'superagent';

const wrapper = (cmd, token)  => {
  cmd
    .set('Authorization', token)
    .then(res => res.body,
      ({ response }) => {
        const { body, text } = response;
        const error = body ? body.error || body : text;
        throw error;
      });
};

export const request =  {

  get(url) {
    const token = localStorage.getItem('varcity');
    return wrapper(superagent.get(url), token);
  },
  post(url, data) {
    const token = localStorage.getItem('varcity');
    return wrapper(superagent.post(url).send(data), token);
  },
  patch(url, data) {
    const token = localStorage.getItem('varcity');
    return wrapper(superagent.patch(url).send(data), token);
  }
};
