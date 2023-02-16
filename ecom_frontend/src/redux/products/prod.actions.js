import axios from 'axios';
import {
  GET_ALL_DATA_SUCCESS,
  GET_DATA_MEN_SUCCESS,
  GET_DATA_WOMEN_SUCCESS,
  GET_PROD_ERROR,
  GET_PROD_LOADING,
} from './prod.type';

export const getGenders = (id) => async (dispatch, state) => {
  try {
    dispatch({ type: GET_PROD_LOADING });
    const getData = axios.get('http://localhost:8080/product/' + id);
    console.log(getData);
    if (id == 'male') {
      return dispatch({ type: GET_DATA_MEN_SUCCESS, payload: getData.data });
    } else {
      return dispatch({ type: GET_DATA_WOMEN_SUCCESS, payload: getData.data });
    }
  } catch (er) {
    dispatch({ type: GET_PROD_ERROR });
    console.log(er.message);
  }
};


