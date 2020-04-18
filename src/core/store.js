import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

export const STORE = createStore(
  reducers,
  applyMiddleware(thunk)
);
