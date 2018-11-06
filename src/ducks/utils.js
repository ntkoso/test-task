import createAction from 'redux-actions/lib/createAction';

export const createAsyncAction = (type, ...rest) => {
    const actionCreator = createAction(
      `${type}_REQUEST`,
      ...rest
    );
    actionCreator.start = createAction(
      `${type}_START`,
      ...rest
    );
    actionCreator.success = createAction(
      `${type}_SUCCESS`,
      ...rest
    );
    actionCreator.failure = createAction(
      `${type}_FAILURE`,
      ...rest
    );
    return actionCreator;
  };