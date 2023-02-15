import {
  AUTH_LOGGED_IN_SUCCESS,
  AUTH_SIGNED_SUCCESS,
  AUTH_LOADING,
  AUTH_ERROR,
} from './auth.type';

const initialState = {
  isSigned: false,
  data: {
    token: null,
    isAuth: false,
  },
  loading: false,
  error: false,
};
export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case AUTH_LOGGED_IN_SUCCESS: {
      return {
        ...state,
        data: {
          token: payload,
          isAuth: true,
        },
        loading: false,
        error: false,
      };
    }
    case AUTH_SIGNED_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        isSigned: true,
      };
    }
    default: {
      return state;
    }
  }
};
