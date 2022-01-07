import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { articleReducer } from "./articleReducer";
import { sideNavbarReducer } from "./sideNavbarReducer";
import { recordsReducer } from "./recordsReducer";
import { coinsReducer } from './coinsReducer';
import { studyCasesReducer } from "./studyCasesReducer";

export const AppReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
  sideNav: sideNavbarReducer,
  records: recordsReducer,
  coins: coinsReducer,
  study_cases: studyCasesReducer
});

export default AppReducer;