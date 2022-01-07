import { ActionTypes } from '../constants/actionTypes';
// import baseURL from '../constants/apiUrl';

export const setError = (actionType, error) => ({
  type: actionType,
  payload: error.message,
});

export const toggleMenu = (toggle) => (dispatch) => {
    console.log(toggle, "actions")
    dispatch({ type: ActionTypes.SHOW_MENU, payload: toggle});

  // try {
  //   dispatch({ type: ActionTypes.LIKE_REQUEST});
  //   const token = localStorage.getItem('token');
  //   console.log(token)
  //   const response = await baseURL.post(`/articles/${arId}/likes`,arId, {
  //     headers : {
  //       Authorization: `Bearer ${token}`
  //     }
  //   });
  //   if (response.data.liked) {
  //     dispatch({ type: ActionTypes.LIKE_NEW, payload: response.data });
  //     console.log('like created')
  //   } else {
  //     dispatch({ type: ActionTypes.LIKE_CREATED, payload: response.data });
  //     console.log('like already created')
  //   }
  // } catch (error) {
  //   dispatch(setError(ActionTypes.SET_ERROR_LIKE, error));
  //   console.log('something bad happened in like')
  // }
};