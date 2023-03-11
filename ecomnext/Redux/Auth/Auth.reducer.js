import { LOGIN, LOGOUT } from './Auth.types';

const initialState = {
  data: {
    token: null,
    isAuth: false,
  },
};
export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        data: {
          token: payload,
          isAuth: true,
        },
      };
    }
    case LOGOUT: {
      return {
        ...state,
        data: {
          token: null,
          isAuth: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
