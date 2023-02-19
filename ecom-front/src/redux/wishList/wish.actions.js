import axios from 'axios';
import {
  WISHLIST_ADD_PRODUCT,
  WISHLIST_GET_PRODUCT,
  WISHLIST_PRODUCT_ERROR,
  WISHLIST_PRODUCT_LOADING,
} from './wish.types';

export const getWishList = () => async (dispatch, state) => {
  try {
    dispatch({ type: WISHLIST_PRODUCT_LOADING });
    const getWish = await axios.post(
      `http://localhost:8080/wishlist/getWishlist`,
      { token: localStorage.getItem('token') }
    );
    dispatch({ type: WISHLIST_GET_PRODUCT, payload: getWish.data.data });
  } catch (er) {
    dispatch({ type: WISHLIST_PRODUCT_ERROR });
    console.log();
  }
};

export const AddToWishList = (id) => async (dispatch, state) => {
  try {
    dispatch({ type: WISHLIST_PRODUCT_LOADING });
    const x = await axios.post(`http://localhost:8080/wishlist`, {
      token: localStorage.getItem('token'),
      productId: id,
    });
    dispatch({ type: WISHLIST_ADD_PRODUCT });
  } catch (er) {
    dispatch({ type: WISHLIST_PRODUCT_ERROR });
    console.log(er.message);
  }
};

export const deleteProduct = (id) => async (dispatch, state) => {
  try {
    dispatch({ type: WISHLIST_PRODUCT_LOADING });
    const x = await axios.delete(`http://localhost:8080/wishlist/${id}`);
    dispatch({ type: WISHLIST_ADD_PRODUCT });
  } catch (er) {
    dispatch({ type: WISHLIST_PRODUCT_ERROR });
    console.log(er.message);
  }
};

export const MoveToCart = (id) => async (dispatch, state) => {
  try {
    console.log(id,"this from actions")
    dispatch({ type: WISHLIST_PRODUCT_LOADING });
    const x = await axios.post(`http://localost:8080/wishlist/toCart/${id}`, {
      token: localStorage.getItem('token'),
    });
    dispatch({ type: WISHLIST_ADD_PRODUCT });
  } catch (er) {
    console.log(er.message);
  }
};
