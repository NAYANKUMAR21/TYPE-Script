import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AuthReducer } from './Auth/Auth.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = legacy_createStore(
  AuthReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
