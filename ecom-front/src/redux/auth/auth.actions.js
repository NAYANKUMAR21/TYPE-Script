import axios from 'axios';
import {
  AUTH_LOGGED_IN_SUCCESS,
  AUTH_SIGNED_SUCCESS,
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_ADMIN_LOGGED_IN,
} from './auth.type';

let url = 'http://localhost:8080';

export const signIn = (cred) => async (dispatch, state) => {
  console.log(url, 'from the actions ', cred);

  try {
    dispatch({ type: AUTH_LOADING });
    const res = await axios.post('http://localhost:8080/user/signup', cred);

    dispatch({ type: AUTH_SIGNED_SUCCESS });
  } catch (er) {
    dispatch({ type: AUTH_ERROR });
    console.log(er.message, 'from login actions');
  }
};

export const LoginAct = (cred) => async (dispatch, state) => {
  const { email, passwword } = cred;

  dispatch({ type: AUTH_LOADING });
  try {
    let user = await axios.post('http://localhost:8080/user/login', cred);
    if (email.includes('@ecom.com')) {
      dispatch({ type: AUTH_ADMIN_LOGGED_IN, payload: user.data.token });
    }
    localStorage.setItem('token', user.data.token);
    dispatch({ type: AUTH_LOGGED_IN_SUCCESS, payload: user.data.token });
  } catch (er) {
    dispatch({ type: AUTH_ERROR });
    console.log(er.message);
  }
};
