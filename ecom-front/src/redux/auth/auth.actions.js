import axios from 'axios';
import { getCart } from '../cart/cart.actions';
import { getWishList } from '../wishList/wish.actions';
import {
  AUTH_LOGGED_IN_SUCCESS,
  AUTH_SIGNED_SUCCESS,
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_ADMIN_LOGGED_IN,
  GET_ALL_USERS,
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

  try {
    dispatch({ type: AUTH_LOADING });
    let user = await axios.post('http://localhost:8080/user/login', cred);

    console.log(user.data.user);
    localStorage.setItem('token', user.data.token);

    if (user.data.user == 'Admin') {
      console.log('this');
      localStorage.setItem('role', 'Admin');
      return dispatch({ type: AUTH_ADMIN_LOGGED_IN, payload: user.data.token });
    }

    return dispatch({ type: AUTH_LOGGED_IN_SUCCESS, payload: user.data.token });
  } catch (er) {
    dispatch({ type: AUTH_ERROR });
    console.log(er.message);
  }
};

export const getAllUsers = () => async (dispatch, state) => {
  try {
    dispatch({ type: AUTH_LOADING });
    const getuser = await axios.get('http://localhost:8080/user/allusers');

    return dispatch({ type: GET_ALL_USERS, payload: getuser.data.users });
  } catch (er) {
    dispatch({ type: AUTH_ERROR });
    console.log(er.message);
  }
};
