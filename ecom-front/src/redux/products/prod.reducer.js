import {
  GET_PROD_ERROR,
  GET_PROD_LOADING,
  GET_ALL_DATA_SUCCESS,
  GET_DATA_MEN_SUCCESS,
  GET_DATA_WOMEN_SUCCESS,
  GET_SINLE_PRODUCT,
} from './prod.type';

const initialState = {
  data: {
    AllData: [],
    men: [],
    women: [],
  },
  loading: false,
  error: false,
  single: {},
};

export const ProdReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DATA_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          AllData: payload,
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
        error: false,
      };
    }

    case GET_SINLE_PRODUCT: {
      return {
        loading: false,
        error: false,
        single: payload,
      };
    }

    default: {
      return state;
    }
  }
};
