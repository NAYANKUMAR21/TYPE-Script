import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';

import thunk from 'redux-thunk';
import { AuthReducer } from './auth/auth.reducer';
import { CartReducer } from './cart/cart.reducer';
import { ProdReducer } from './products/prod.reducer';
import { WishlistReducer } from './wishList/wish.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
  auth: AuthReducer,
  products: ProdReducer,
  CartItems: CartReducer,
  WishListItems: WishlistReducer,
});

// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
