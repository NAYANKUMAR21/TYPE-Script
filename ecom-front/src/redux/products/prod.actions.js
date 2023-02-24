import axios from 'axios';
import {
  GET_ALL_DATA_SUCCESS,
  GET_DATA_MEN_SUCCESS,
  GET_DATA_WOMEN_SUCCESS,
  GET_PROD_ERROR,
  GET_PROD_LOADING,
  GET_SINLE_PRODUCT,
} from './prod.type';
let url = 'http://localhost:8080';
export const getGenders = (id) => async (dispatch, state) => {
  try {
    dispatch({ type: GET_PROD_LOADING });
    const getData = await axios.get(url + '/product/' + id);

    console.log(getData.data.data, 'from herer');
    if (id === 'Male') {
      return dispatch({
        type: GET_DATA_MEN_SUCCESS,
        payload: getData.data.data,
      });
    } else {
      return dispatch({
        type: GET_DATA_WOMEN_SUCCESS,
        payload: getData.data.data,
      });
    }
  } catch (er) {
    return dispatch({ type: GET_PROD_ERROR });
  }
};

export const getAllProducts = () => async (dispatch, state) => {
  try {
    dispatch({ type: GET_PROD_LOADING });
    const getData = await axios.get(url + '/product/');
    console.log(getData.data.data);
    return dispatch({
      type: GET_ALL_DATA_SUCCESS,
      payload: getData.data.data,
    });
  } catch (er) {
    return dispatch({ type: GET_PROD_ERROR });
    console.log(er.message);
  }
};

export const getSingle = (id) => async (dispatch, state) => {
  try {
    dispatch({ type: GET_PROD_LOADING });
    const getSingleProd = await axios.get(`${url}/product/single/${id}`);
    console.log(getAllProducts, 'single product');
    return dispatch({ type: GET_SINLE_PRODUCT, payload: getSingleProd.data });
  } catch (er) {
    return dispatch({ type: GET_PROD_ERROR });
  }
};

export const deleteProd = (id) => async (dispatch, state) => {
  try {
    console.log(id, 'from actions');
    dispatch({ type: GET_PROD_LOADING });
    const deleteProd = await axios.delete(`${url}/product/${id}`, {
      token: localStorage.getItem('token'),
    });
    return dispatch({ type: GET_SINLE_PRODUCT, payload: {} });
  } catch (er) {
    return dispatch({ type: GET_PROD_ERROR });
  }
};

export const PostData = (data) => async (dispatch, state) => {
  try {
    let body = {
      ...data,
      token: localStorage.getItem('token'),
    };
    dispatch({ type: GET_PROD_LOADING });
    const postdata = await axios.post(url + '/product/', body);
    return dispatch({ type: GET_SINLE_PRODUCT, payload: {} });
  } catch (er) {
    dispatch({ type: GET_PROD_ERROR });
    console.log(er.message);
  }
};
