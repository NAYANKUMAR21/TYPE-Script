import axios from 'axios';
import { LOGIN } from './Auth.types';

export const loginAction = (cred) => async (dispatch, state) => {
  try {
    const AuthUser = await axios.post('https://reqres.in/api/login', cred);

    dispatch({ type: LOGIN, payload: AuthUser.data.token });
  } catch (er) {
    console.log(er, 'error from actions');
  }
};
