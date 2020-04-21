import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
export const STORE = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);