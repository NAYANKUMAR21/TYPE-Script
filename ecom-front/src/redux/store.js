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

const rootReducer = combineReducers({
  auth: AuthReducer,
  products: ProdReducer,
  CartItems: CartReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
