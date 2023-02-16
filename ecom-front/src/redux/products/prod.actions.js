import axios from 'axios';
import {
  GET_ALL_DATA_SUCCESS,
  GET_DATA_MEN_SUCCESS,
  GET_DATA_WOMEN_SUCCESS,
  GET_PROD_ERROR,
  GET_PROD_LOADING,
  GET_SINLE_PRODUCT,
} from './prod.type';

export const getGenders = (id) => async (dispatch, state) => {
  try {
    dispatch({ type: GET_PROD_LOADING });
    const getData = await axios.get('http://localhost:8080/product/' + id);

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
    const getData = await axios.get('http://localhost:8080/product/');
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
    const getSingleProd = await axios.get(
      `http://localhost:8080/product/single/${id}`
    );
    console.log(getAllProducts, 'single product');
    return dispatch({ type: GET_SINLE_PRODUCT, payload: getSingleProd.data });
  } catch (er) {
    return dispatch({ type: GET_PROD_ERROR });
  }
};
