import { LOG_IN_ERROR, LOG_IN_LOADING, LOG_IN_SUCCESS } from './auth.types';
import axios from 'axios';
export const LoginAction = (cred) => async (dispatch, state) => {
  try {
    dispatch({ type: LOG_IN_LOADING });
    const res = await axios.post('https://reqres.in/api/login', cred);
    console.log(res.data.token);
    return dispatch({ type: LOG_IN_SUCCESS, payload: res.data.token });
  } catch (er) {
    dispatch({ type: LOG_IN_ERROR });
  }
};
