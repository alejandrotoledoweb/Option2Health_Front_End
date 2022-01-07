import { ActionTypes } from '../constants/actionTypes';
import baseURL from '../constants/apiUrl';

export const setError = (actionType, error) => ({
  type: actionType,
  payload: error.message,
});

export const loadCoins = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.COINS_REQUEST});
    const token = localStorage.getItem('token');
    const response = await baseURL.get('/coins', {
      headers : {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    if (response.data) {
      dispatch({ type: ActionTypes.COINS, payload: response.data });
      console.log('coins saved')
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_COINS, error));
    console.log('something bad happened coins loading')
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
    console.log(response.data, "records")
    if (response.data) {
      dispatch({ type: ActionTypes.RECORDS, payload: response.data });
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_RECORDS, error));
    console.log('something bad happened in records')
  }
};
