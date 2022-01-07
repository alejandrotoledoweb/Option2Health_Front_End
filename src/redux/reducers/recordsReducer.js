import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  records: [{}],
  reLoading: true,
  reError: "",
  reStatus: "",
};

export const recordsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ERROR_RECORDS:
      return {
        ...state,
        records: [{}],
        reLoading: false,
        reError: payload,
        reStatus: "",
      };
    case ActionTypes.RECORDS_REQUEST:
      return {
        ...state,
        records: [{}],
        reLoading: true,
        reError: "",
        reStatus: "requested",
      };
    case ActionTypes.RECORDS:
      return {
        ...state,
        records: payload.records ? payload.records : [{}],
        reLoading: false,
        reError: "",
        reStatus: "loaded",
      };
    case ActionTypes.RECORDS_CREATED:
      return {
        ...state,
        records: payload.records ? payload.records : [{}],
        reLoading: false,
        reError: "",
        reStatus: "not created",
      };
    default:
      return state;
  }
};
