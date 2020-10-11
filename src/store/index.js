import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer as productReducer, MODULE_NAME as productsModuleName} from './productListReduser';
import {reducer as emergeReducer, MODULE_NAME as emergeModuleName} from './emergeReduser';

const rootReducer = combineReducers({
  [productsModuleName]: productReducer,
  [emergeModuleName]: emergeReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));