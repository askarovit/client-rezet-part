import { combineReducers } from 'redux';
import carts from './carts';

const appReducer = combineReducers({ carts });

export default appReducer;