const {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} = require('./auth.type');
require('dotenv').config();
let url = process.env.URL || 'http://localhost:8080';
const login = (cred) => async (dispatch, state) => {
  dispatch({ type: GET_DATA_LOADING });
  try {
    const res = axios.post(url + '/user/login', cred);
    console.log(res);
  } catch (er) {
    console.log(er.message, 'from login actions');
  }
};
