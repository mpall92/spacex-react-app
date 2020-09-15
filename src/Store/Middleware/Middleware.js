import {
  fetchData,
  fetchDataSuccess,
  fetchDataError,
} from '../Actions/Actions';
export const INIT = 'INIT';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

const middleware = (store) => (next) => (action) => {
  let dispatch = store.dispatch;
  switch (action.type) {
    case INIT:
      dispatch(fetchData());
      break;
    case FETCH_DATA:
      fetch('https://api.spacexdata.com/v3/launches')
        .then(resp => resp.json())
        .then(payload => dispatch(fetchDataSuccess(payload)))
        .catch((error) => dispatch(dispatch(fetchDataError(error))));
  }
  let result = next(action);
  return result;
};

export default middleware;
