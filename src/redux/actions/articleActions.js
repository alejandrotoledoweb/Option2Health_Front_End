import { ActionTypes } from '../constants/actionTypes';
import baseURL from '../constants/apiUrl';

export const setError = (actionType, error) => ({
  type: actionType,
  payload: error.message,
});

export const searchArticles = (title) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.SEARCH_REQUEST });
    const response = await baseURL.get(`/articles/${title}`);
    if (response.data) {
      dispatch({ type: ActionTypes.SEARCH, payload: response.data });
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_ARTICLE, error));
    console.log('something bad happened in search');
  }
};

export const createPublicacion = (data) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.ARTICLE_REQUEST });
    const token = localStorage.getItem('token');
    const response = await baseURL.post('/articles', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    if (response.data) {
      dispatch({ type: ActionTypes.NEW_ARTICLE, payload: response.data });
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_ARTICLE, error));
    console.log('something bad happened in create article');
  }
};

export const getUserArticles = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.ARTICLE_REQUEST });
    const token = localStorage.getItem('token');
    const response = await baseURL.get('/userarticles', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('actions:', response.data);
    if (response.data) {
      dispatch({ type: ActionTypes.LOAD_ARTICLES, payload: response.data });
      console.log('user articles loaded');
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_ARTICLE, error));
    console.log('something bad happened in get user article');
  }
};

export const updatePublicacion = (data) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.ARTICLE_REQUEST });
    const token = localStorage.getItem('token');
    const response = await baseURL.put(`/articles/${data.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    if (response.data) {
      dispatch({ type: ActionTypes.UPDATE_ARTICLE, payload: response.data });
      console.log('user articles UPDATED');
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_ARTICLE, error));
    console.log('something bad happened in UPDATE user article');
  }
};

export const emptyArticles = () => (dispatch) => {
  dispatch({ type: ActionTypes.EMPTY_ARTICLES });
};

// export const updatePublicacion = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: ActionTypes.ARTICLE_REQUEST});
//     const token = localStorage.getItem('token');
//     const response = await baseURL.put(`/articles/${data.id}`, data, {
//       headers : {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     console.log(response.data)
//     if (response.data) {
//       dispatch({ type: ActionTypes
//     }
//   } catch (error) {
//     dispatch(setError(ActionTypes.SET_ERROR_ARTICLE, error));
//   }
// }

// export const emptyArticles = () => (dispatch) => {

//     dispatch({ type: ActionTypes.EMPTY_ARTICLES});
// }
