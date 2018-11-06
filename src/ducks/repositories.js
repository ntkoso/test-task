import { takeEvery } from 'redux-saga';
import { createAsyncAction, BASE_URL } from './utils';
import { yellow } from 'ansi-colors';

/**
 * CONSTANTS
 */
export const GET_REPOSITORIES = `repositories/GET_REPOSITORIES`;

/**
 * ACTION CREATORS
 */
export const actionGetRepositories = createAsyncAction(GET_REPOSITORIES);

/**
 * REDUCERS
 */
export default (state = {}, action) => {
  switch (action.type) {
    case `${actionGetRepositories.start}`:
    default:
      return state;
  }
}

/**
 * SAGAS
 */
function* sagaGetRepositories() {
  yield actionGetRepositories.start();
}

export function* saga() {
  yield takeEvery(actionGetRepositories, sagaGetRepositories)
}