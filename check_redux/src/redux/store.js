import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './auth/auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});
// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
