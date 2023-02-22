import {
  GETALL_CART_ERROR,
  GETALL_CART_LOADING,
  GET_ALL_CART,
} from './admin.type';

let initialState = {
  loading: false,
  error: false,
  data: {
    users: [],
    products: [],
    cartItems: [],
    sold: [],
  },
};
export const AdminReduer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETALL_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GETALL_CART_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_ALL_CART: {
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          users: payload.users,
          products: payload.products,
          cartItems: payload.cartItems,
          sold: payload.sold,
        },
      };
    }
    default: {
      return state;
    }
  }
};
