import { ActionTypes } from '../constants/actionTypes';
import baseURL from '../constants/apiUrl';

export const setError = (actionType, error) => ({
  type: actionType,
  payload: error.message,
});

export const recordCreateAction = (arId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.RECORDS_REQUEST});
    const token = localStorage.getItem('token');
    const response = await baseURL.post(`/articles/${arId}/records`,arId, {
      headers : {
        Authorization: `Bearer ${token}`
      }
    });
    if (response.data.saved) {
      dispatch({ type: ActionTypes.RECORDS, payload: response.data });
      console.log('article saved')
    } else {
      dispatch({ type: ActionTypes.RECORDS_CREATED, payload: response.data });
      console.log('article already saved')
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_RECORDS, error));
    console.log('something bad happened in create a record')
  }
}
  
export const loadRecords = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.RECORDS_REQUEST});
    const token = localStorage.getItem('token');
    const response = await baseURL.get('/records', {
      headers : {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data)
    if (response.data) {
      dispatch({ type: ActionTypes.RECORDS, payload: response.data });
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_RECORDS, error));
    console.log('something bad happened in records')
  }
};
