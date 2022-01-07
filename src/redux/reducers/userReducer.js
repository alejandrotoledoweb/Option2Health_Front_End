import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  user: {},
  loading: true,
  error: "",
  status: "",
  registered: false,
  logged_in: false,
  medico: false,
  empresa: false
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ERROR_USER:
      return {
        ...state,
        loading: false,
        error: payload.message ? payload.message : payload,
        status: "error"
      };
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        status: "requested"
      };
    case ActionTypes.LOGIN:
      return {
        ...state,
        user: payload.user,
        loading: false,
        error: "",
        status: "logged in",
        logged_in: true,
        medico: payload.user.medico
      };
    case ActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        status: "requested",
        registered: false,
      };
    case ActionTypes.CREATE_USER:
      return {
        ...state,
        loading: false,
        error: "",
        status: "registered",
        registered: true,
        logged_in: false,
      };
    case ActionTypes.UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        status: "requested"
      };
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        user: payload.user,
        loading: false,
        error: "",
        status: "updated",
        registered: true,
        logged_in: true,
      };
    case ActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        status: "logout requested",
        logged_in: false,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        user : [],
        loading: false,
        error: "",
        status: "logout",
        registered: false,
      };
    case ActionTypes.LOGOUT_SET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        status: "error while logging out"
      };
    default:
      return state;
  }
};
