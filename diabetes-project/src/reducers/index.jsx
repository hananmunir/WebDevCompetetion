import { combineReducers } from "redux";
import Tracker from "./Tracker";
import auth from "./auth";
export default combineReducers({
  Tracker,
  auth,
});
