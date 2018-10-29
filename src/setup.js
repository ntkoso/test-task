import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import contributors, { saga as contributorsSaga } from './ducks/contributors';

function* rootSaga() {
  yield all([
    contributorsSaga(),
  ]);
}

const reducer = combineReducers({
  contributors,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);