import axios from 'axios';

const RequestController = {
  get: (url) => new Promise((success, fail) => {
    axios.get(
      `${process.env.REACT_APP_API_URL}${url}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      },
    ).then(success).catch(fail);
  }),
  post: (url, body) => new Promise((success, fail) => {
    axios.post(
      `${process.env.REACT_APP_API_URL}${url}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      },
    ).then(success).catch(fail);
  }),
  put: (url, body) => new Promise((success, fail) => {
    axios.put(
      `${process.env.REACT_APP_API_URL}${url}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      },
    ).then(success).catch(fail);
  }),
  delete: (url) => new Promise((success, fail) => {
    axios.delete(
      `${process.env.REACT_APP_API_URL}${url}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      },
    ).then(success).catch(fail);
  }),
};

export default RequestController;
