import {
  GETALL_CART_ERROR,
  GETALL_CART_LOADING,
  GET_ALL_CART,
} from './admin.type';
import axios from 'axios';
export const GETALL = () => async (dispatch, state) => {
  try {
    dispatch({ type: GETALL_CART_LOADING });
    const users = await axios.get('https://ecom-def1.onrender.com/user/allusers');
    const products = await axios.get('https://ecom-def1.onrender.com/product/');
    const cartItems = await axios.get(
      'https://ecom-def1.onrender.com/cart/admin-getall'
    );
    const sold = await axios.get('https://ecom-def1.onrender.com/payment/list-order');
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
