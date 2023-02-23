import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../cart/cart.actions';
import { LOGOUT_UESER_CART } from '../cart/cart.type';
import { getWishList } from '../wishList/wish.actions';
import { LOGOUT_UESER_WISHLIST } from '../wishList/wish.types';
import {
  AUTH_LOGGED_IN_SUCCESS,
  AUTH_SIGNED_SUCCESS,
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_ADMIN_LOGGED_IN,
  GET_ALL_USERS,
  LOGGOUT_USER_SUCCESS,
  LOGGOUT_USER_ERROR,
  LOGGOUT_USER_LOADING,
} from './auth.type';

let url = 'http://localhost:8080';

export const signIn = (cred) => async (dispatch, state) => {
  console.log(url, 'from the actions ', cred);

  try {
    dispatch({ type: AUTH_LOADING });
    const res = await axios.post('http://localhost:8080/user/signup', cred);

    dispatch({ type: AUTH_SIGNED_SUCCESS });
  } catch (er) {
    alert('Something wrong happened');
    window.location.reload();
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
    alert('wrong Credtetails');
    window.location.reload();
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

export const UserLogout = () => async (dispatch, state) => {
  try {
    dispatch({ type: LOGGOUT_USER_LOADING });
    const logout = await axios.get('http://localhost:8080/user/logout');
    if (logout.data === 'LoggedOut') {
      console.log('this logout');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      dispatch({ type: LOGOUT_UESER_WISHLIST });
      dispatch({ type: LOGOUT_UESER_CART });
      return dispatch({ type: LOGGOUT_USER_SUCCESS });
    }
  } catch (er) {
    alert('Error happened ');
    window.location.reload();
    dispatch({ type: LOGGOUT_USER_ERROR });
  }
};
