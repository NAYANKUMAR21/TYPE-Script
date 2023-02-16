import {
  AUTH_LOGGED_IN_SUCCESS,
  AUTH_SIGNED_SUCCESS,
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_ADMIN_LOGGED_IN,
  LOGGOUT_USER,
} from './auth.type';

const initialState = {
  admin: false,
  isSigned: false,
  data: {
    token: localStorage.getItem('token') || null,
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
        isSigned: true,
        data: {
          token: localStorage.getItem('token') || payload,
          isAuth: localStorage.getItem('token') ? true : false,
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
    case AUTH_ADMIN_LOGGED_IN: {
      return {
        ...state,

        admin: true,
        data: {
          token: payload,
          isAuth: true,
        },
        loading: false,
        error: false,
      };
    }
    case LOGGOUT_USER: {
      return {
        admin: false,
        isSigned: false,
        data: {
          token: null,
          isAuth: false,
        },
        loading: false,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
