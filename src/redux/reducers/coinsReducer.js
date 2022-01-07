import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  coins: [],
  coLoading: true,
  coError: "",
  coStatus: "",
};

export const coinsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ERROR_COINS:
      return {
        ...state,
        coins: [],
        coLoading: false,
        coError: payload,
        coStatus: "",
      };
    case ActionTypes.COINS_REQUEST:
      return {
        ...state,
        coins: [],
        coLoading: true,
        coError: "",
        coStatus: "requested",
      };
    case ActionTypes.COINS:
      return {
        ...state,
        coins: payload.coins,
        coLoading: false,
        coError: "",
        coStatus: "loaded",
      };
    default:
      return state;
  }
};
