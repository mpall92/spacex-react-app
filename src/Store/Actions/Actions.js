export const INIT = 'INIT';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const init = () => ({
  type:INIT,
});

export const fetchData = () => ({
  type:FETCH_DATA,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataError = (data) => ({
  type: FETCH_DATA_ERROR,
  error: data,
});
