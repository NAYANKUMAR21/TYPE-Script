import {
  AUTH_LOGGED_IN_SUCCESS,
  AUTH_SIGNED_SUCCESS,
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_ADMIN_LOGGED_IN,
  LOGGOUT_USER,
  GET_ALL_USERS,
  LOGGOUT_USER_ERROR,
  LOGGOUT_USER_SUCCESS,
  LOGGOUT_USER_LOADING,
} from './auth.type';

const initialState = {
  allUsers: [],
  single: {},
  admin: !!localStorage.getItem('role'),
  isSigned: false,
  data: {
    token: localStorage.getItem('token') || null,
    isAuth: !!localStorage.getItem('token'),
  },
  loading: false,
  error: false,
};
export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS: {
      return {
        ...state,
        allUsers: payload,
        loading: false,
        error: false,
      };
    }
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
        admin: false,
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
        isSigned: true,
        admin: !!localStorage.getItem('role'),
        data: {
          token: localStorage.getItem('token'),
          isAuth: localStorage.getItem('token') ? true : false,
        },
        loading: false,
        error: false,
      };
    }
    case LOGGOUT_USER_SUCCESS: {
      return {
        allUsers: [],
        single: {},
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
    case LOGGOUT_USER_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGGOUT_USER_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
