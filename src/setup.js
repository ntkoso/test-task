import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import repositories, { saga as repositoriesSaga } from './ducks/repositories';

function* rootSaga() {
  yield all([
    repositoriesSaga(),
  ]);
}

const reducer = combineReducers({
  repositories,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);