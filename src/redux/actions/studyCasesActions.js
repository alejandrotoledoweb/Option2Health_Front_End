import { ActionTypes } from '../constants/actionTypes';
import baseURL from '../constants/apiUrl';

export const setError = (actionType, error) => ({
  type: actionType,
  payload: error.message,
});

export const searchStudyCase = (nombre) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.STUDY_CASE_REQUEST});
    const response = await baseURL.get(`/study_cases/${nombre}`,);
    if (response.data) {
      dispatch({ type: ActionTypes.LOAD_STUDY_CASES, payload: response.data });
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_STUDY_CASE, error));
    console.log('something bad happened in search study cases')
  }
};

export const createStudyCase = (data) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.STUDY_CASES_REQUEST});
    const token = localStorage.getItem('token');
    const response = await baseURL.post('/study_cases', data, {
      headers : {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data)
    if (response.data) {
      dispatch({ type: ActionTypes.NEW_STUDY_CASE, payload: response.data });
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_STUDY_CASE, error));
    console.log('something bad happened in create study case')
  }
}

export const getUserStudyCases = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.STUDY_CASES_REQUEST});
    const token = localStorage.getItem('token');
    const response = await baseURL.get('/userstudy_cases', {
      headers : {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("actions:",response.data)
    if (response.data) {
      dispatch({ type: ActionTypes.LOAD_STUDY_CASES, payload: response.data });
      console.log('user articles loaded')
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_STUDY_CASE, error));
    console.log('something bad happened in get user study case')
  }
}


export const updateStudyCase = (data) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.STUDY_CASES_REQUEST});
    const token = localStorage.getItem('token');
    const response = await baseURL.put(`/study_cases/${data.id}`, data, {
      headers : {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data)
    if (response.data) {
      dispatch({ type: ActionTypes.UPDATE_STUDY_CASE, payload: response.data });
      console.log('user study case UPDATED')
    }
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR_ARTICLE, error));
    console.log('something bad happened in UPDATE user study case')
  }
}


