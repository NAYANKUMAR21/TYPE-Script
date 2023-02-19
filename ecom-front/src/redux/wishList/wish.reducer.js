import {
  LOGOUT_UESER_WISHLIST,
  WISHLIST_ADD_PRODUCT,
  WISHLIST_GET_PRODUCT,
  WISHLIST_MOVE_TO_CART,
  WISHLIST_PRODUCT_ERROR,
  WISHLIST_PRODUCT_LOADING,
} from './wish.types';

const initialState = {
  wishlist: {
    data: [],
    InWish: 0,
  },
  loading: false,
  error: false,
};

export const WishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case WISHLIST_GET_PRODUCT: {
      return {
        ...state,
        wishlist: {
          data: payload,
          InWish: payload.length,
        },
        loading: false,
        error: false,
      };
    }
    case WISHLIST_ADD_PRODUCT: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case WISHLIST_MOVE_TO_CART: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case WISHLIST_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case WISHLIST_PRODUCT_LOADING: {
      return {
        ...state,
        error: false,
        loading: false,
      };
    }

    case LOGOUT_UESER_WISHLIST: {
      return {
        wishlist: {
          data: [],
          InWish: 0,
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
