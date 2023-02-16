import axios from 'axios';
import { useSelector } from 'react-redux';
import {
  CART_ADD_PRODUCT,
  CART_GET_PRODUCT,
  CART_PRODUCT_ERROR,
  CART_PRODUCT_LOADING,
} from './cart.type';

export const getCart = () => async (dispatch, state) => {
  try {
    let x = localStorage.getItem('token');
    console.log(x);
    const getDataCart = await axios.post('http://localhost:8080/cart/getAll', {
      token: x,
    });
    console.log(getDataCart);

    dispatch({ type: CART_GET_PRODUCT, payload: getDataCart.data });
  } catch (er) {
    dispatch({ type: CART_PRODUCT_ERROR });
    console.log(er.message);
  }
};

export const addToCart = (id) => async (dispatch, state) => {
  const obj = {
    token: localStorage.getItem('token'),
    productId: id,
    quantity: 1,
  };
  try {
    dispatch({ type: CART_PRODUCT_LOADING });
    await axios.post('http://localhost:8080/cart/', obj);
    dispatch({ type: CART_ADD_PRODUCT });
  } catch (er) {
    dispatch({ type: CART_PRODUCT_ERROR });
  }
};
