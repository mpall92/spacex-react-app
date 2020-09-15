export const INIT = 'INIT';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

const reducer = (
  state = { launches: [], error: '', status: '' },
  action,
) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, launches: [], error: '', status: 'Loading Data' };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        launches: action.payload,
        error: '',
        status: 'complete',
      };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.error, status: 'error' };
    default:
      return state;
  }
};
export default reducer;
