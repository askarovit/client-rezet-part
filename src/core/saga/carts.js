import { call, put } from 'redux-saga/effects';
import { getCartsFailedAction, getCartsSuccessAction } from '../actions/carts';
import { httpRequest } from '../api/http';

function* getCartListWorker() {
  try {
    const { data } = yield call(httpRequest, {
      url: 'carts',
      method: 'get'
    });
    yield put(getCartsSuccessAction(data));
  } catch(error) {
    yield put(getCartsFailedAction(error));
  }
}

export default getCartListWorker;