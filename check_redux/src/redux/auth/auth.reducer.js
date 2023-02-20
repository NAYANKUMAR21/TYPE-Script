import { LOG_IN_ERROR, LOG_IN_LOADING, LOG_IN_SUCCESS } from './auth.types';

let initial = {
  data: {
    token: '',
    isAuth: '',
  },
  loading: false,
  error: false,
};
export const authReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case LOG_IN_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case LOG_IN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOG_IN_SUCCESS: {
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

    default: {
      return state;
    }
  }
};
