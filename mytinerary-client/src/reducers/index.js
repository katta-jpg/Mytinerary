import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import authReducer from "./authReducer"
import errorReducer from "./errorReducer"

export default combineReducers({
  cityReducer,
  itineraryReducer,
  activityReducer,
  authReducer,
  errorReducer 
});
