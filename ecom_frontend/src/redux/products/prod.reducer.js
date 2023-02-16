import {
  GET_PROD_ERROR,
  GET_PROD_LOADING,
  GET_ALL_DATA_SUCCESS,
  GET_DATA_MEN_SUCCESS,
  GET_DATA_WOMEN_SUCCESS,
} from './prod.type';

const initialState = {
  data: {
    AllData: [],
    men: [],
    women: [],
  },
  loading: false,
  error: false,
};
export const ProdReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DATA_SUCCESS: {
      return {
        ...state,
        data: {
          AllData: payload,
          ...state.data,
        },
        loading: false,
        error: false,
      };
    }
    case GET_DATA_MEN_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          men: payload,
        },
        loading: false,
        error: false,
      };
    }
    case GET_DATA_WOMEN_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          women: payload,
        },
        loading: false,
        error: false,
      };
    }
    case GET_PROD_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_PROD_LOADING: {
      return {
        ...state,
        loading: true,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
