import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  show: false
};

export const sideNavbarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_MENU:
      console.log(payload, 'reducer')
      return {
        ...state,
        show: !payload,
      };
    default:
      return state;
  }
};
