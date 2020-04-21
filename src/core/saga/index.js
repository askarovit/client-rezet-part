import { all, fork } from 'redux-saga/effects';
import cartSaga from './carts';

export default function* rootSaga() {
  yield all([
    fork(cartSaga)
  ])
}