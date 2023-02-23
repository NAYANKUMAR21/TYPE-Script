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
      `https://ecom-def1.onrender.com/wishlist/getWishlist`,
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
    const x = await axios.post(`https://ecom-def1.onrender.com/wishlist`, {
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
    const x = await axios.delete(`https://ecom-def1.onrender.com/wishlist/${id}`);
    dispatch({ type: WISHLIST_ADD_PRODUCT });
  } catch (er) {
    dispatch({ type: WISHLIST_PRODUCT_ERROR });
    console.log(er.message);
  }
};

export const MoveToCart = (id) => async (dispatch, state) => {
  try {
    console.log(id, 'this from actions');
    dispatch({ type: WISHLIST_PRODUCT_LOADING });
    let body = {
      token: localStorage.getItem('token'),
    };
    await axios.post(`https://ecom-def1.onrender.com/wishlist/toCart/${id}`, {
      token: localStorage.getItem('token'),
    });
    // let res = await fetch(, {
    //   method: 'POST',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer',
    //   body: JSON.stringify(),
    // });
    // await res.json();

    console.log('request done');
    dispatch({ type: WISHLIST_ADD_PRODUCT });
  } catch (er) {
    dispatch({ type: WISHLIST_PRODUCT_ERROR });
    console.log(er.message);
  }
};
