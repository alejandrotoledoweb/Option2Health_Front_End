import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  study_cases: [{}],
  user_study_cases: [{}],
  scLoading: false,
  scError: "",
  scStatus: "",
};

export const studyCasesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ERROR_STUDY_CASE:
      return {
        ...state,
        study_cases: [{}],
        user_study_cases: [{}],
        scLoading: false,
        scError: payload,
        scStatus: "",
      };
      case ActionTypes.STUDY_CASES_REQUEST:
        return {
          ...state,
          scLoading: true,
          scError: "",
          scStatus: "loading",
        };
    case ActionTypes.STUDY_CASES_SEARCH_REQUEST:
      return {
        ...state,
        study_cases: [{}],
        scLoading: true,
        scError: "",
        scStatus: "loading",
      };
    case ActionTypes.SEARCH_STUDY_CASES:
      const studyCases = [...payload.study_cases]
      return {
        ...state,
        study_cases: studyCases,
        user_study_cases: [{}],
        scLoading: false,
        scError: "",
        scStatus: "loaded",
      };
    case ActionTypes.NEW_STUDY_CASE:
      const updateStudyCases = state.study_cases ? [...state.study_cases, payload] : payload;
      updateStudyCases.sort((a, b) => a.created_at > b.created_at ? -1 : 1);
      return {
        ...state,
        study_cases: updateStudyCases,
        scLoading: false,
        scError: "",
        scStatus: "created",
      };
    case ActionTypes.LOAD_STUDY_CASES:
      const loadStudyCases = payload.sort((a, b) => a.created_at > b.created_at ? -1 : 1);
      return {
        ...state,
        study_cases: loadStudyCases,
        scLoading: false,
        scError: "",
        scStatus: "loaded",
      };
    default:
      return state;
  }
};
