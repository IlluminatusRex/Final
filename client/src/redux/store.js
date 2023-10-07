import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';
import coursesReducer from './coursesRedux';
import cartReducer from './cartRedux';
import ordersReducer from './ordersRedux';
import thunk from 'redux-thunk';

const reducers = {
  courses: coursesReducer,
  cart: cartReducer,
  orders: ordersReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;