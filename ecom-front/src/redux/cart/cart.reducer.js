import {
  CART_ADD_PRODUCT,
  CART_GET_PRODUCT,
  CART_PRODUCT_ERROR,
  CART_PRODUCT_LOADING,
} from './cart.type';

const initialState = {
  cart: {
    data: [],
    InCart: 0,
  },
  bought: [],
  loading: false,
  error: false,
};
export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ADD_PRODUCT: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case CART_GET_PRODUCT: {
      return {
        ...state,
        cart: {
          data: payload,
          InCart: payload.length,
        },
        loading: false,
        error: false,
      };
    }
    case CART_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case CART_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
