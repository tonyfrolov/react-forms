/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export default initialState => {
  return createStore(rootReducer, initialState, enhancer);
};
