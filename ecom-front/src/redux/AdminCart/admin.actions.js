import {
  GETALL_CART_ERROR,
  GETALL_CART_LOADING,
  GET_ALL_CART,
} from './admin.type';
import axios from 'axios';
export const GETALL = () => async (dispatch, state) => {
  try {
    dispatch({ type: GETALL_CART_LOADING });
    const users = await axios.get('http://localhost:8080/user/allusers');
    const products = await axios.get('http://localhost:8080/product/');
    const cartItems = await axios.get(
      'http://localhost:8080/cart/admin-getall'
    );
    const sold = await axios.get('http://localhost:8080/payment/list-order');
    console.log(users.data, 'from admin');
    dispatch({
      type: GET_ALL_CART,
      payload: {
        users: users.data.users,
        products: products.data.data,
        cartItems: cartItems.data,
        sold: sold.data,
      },
    });
  } catch (er) {
    dispatch({ type: GETALL_CART_ERROR });
    console.log(er.message);
  }
};
