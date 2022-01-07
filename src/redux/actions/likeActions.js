import { ActionTypes } from '../constants/actionTypes';
import baseURL from '../constants/apiUrl';

export const setError = (actionType, error) => ({
  type: actionType,
  payload: error.message,
});

export const likeCreateAction = (arId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LIKE_REQUEST});
    const token = localStorage.getItem('token');
    const response = await baseURL.post(`/articles/${arId}/likes`,arId, {
      headers : {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data)
    if (response.data) {
      dispatch({ type: ActionTypes.UPDATE_LIKE, payload: response.data });
      console.log('like updated')
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_LIKE, error));
    console.log('something bad happened in like')
  }
};