import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from './auth.type';

const initialState = {
  data: {
    token: null,
    isAuth: false,
  },
  loading: false,
  error: false,
};
export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_DATA_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: {
          token: payload,
          isAuth: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};
