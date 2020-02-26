import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import modeReducer from './modesRedux';
import compareReducer from './compareRedux';
import currencyRedux from './currencyRedux';
import currencyRatesRedux from './currencyRatesRedux';
import searchRedux from './searchRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  mode: modeReducer,
  compare: compareReducer,
  currency: currencyRedux,
  currencyRates: currencyRatesRedux,
  search: searchRedux,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
