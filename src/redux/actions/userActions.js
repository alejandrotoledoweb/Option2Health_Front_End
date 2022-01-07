import { ActionTypes } from '../constants/actionTypes';
import baseURL from '../constants/apiUrl';

export const requestPending = (actionType) => ({
  type: actionType,
});

export const setError = (actionType, error) => ({
  type: actionType,
  payload: error,
});

export const loginAction = (loginDetails) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOGIN_REQUEST});
    const response = await baseURL.post('/auth/login', loginDetails);
    console.log(response.data)

    if (response.data.logged_in) {
      localStorage.setItem('token', response.data.access_token);
      console.log('token saved')
      dispatch({ type: ActionTypes.LOGIN, payload: response.data });
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_USER, error.message));
    console.log('something bad happened')
  }
};

export const registerRequest = () => (dispatch) => {
  dispatch({ type: ActionTypes.REGISTER_REQUEST});
}

export const RegisterAction = (registerDetails) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.REGISTER_REQUEST});
    const response = await baseURL.post('/signup', registerDetails);
    console.log(response.data)
    if (response.data) {
      dispatch({ type: ActionTypes.CREATE_USER, payload: response.data });
      console.log('user register successfully')
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_USER, error));
    console.log('something bad happened while register')
  }
};

export const updateUser = (updateParams) => async(dispatch) => {
  try {
    dispatch({ type: ActionTypes.UPDATE_REQUEST});
    console.log('update request');
    const token = localStorage.getItem('token');
    const response = await baseURL.put(`update/user`, updateParams, {
      headers: { 
        Authorization: `Bearer ${token}`
      }
    })
    console.log("respuesta", response.data.updated)
    if (response.data.updated) {
      dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data})
      console.log('user updated successfully')
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_USER, error))
    console.log('something bad happen update user')
  }
};

export const logoutUserAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOGOUT_REQUEST});
    const token = localStorage.getItem('token');
    const response = await baseURL.delete(`/authentication/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response.data)
    if (response.data.logged_out) {
      dispatch({ type: ActionTypes.LOGOUT});
      localStorage.clear();
      localStorage.removeItem('token');
      localStorage.setItem('token', "");
      console.log(token, "empty token");
      console.log("logout successfully");
    }
  } catch (error) {
    dispatch(setError(ActionTypes.LOGOUT_SET_ERROR, error))
    console.log('something bad happen when logging out')
  }
};
