import superagent from 'superagent';

const url = process.env.EDU_API_URL || 'http://localhost:3000/edu';

class EduApi {
  static getAllEducation() {
    return
    fetch(url)
    .then(res => {
      return Response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default EduApi;

