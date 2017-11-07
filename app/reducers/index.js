import { combineReducers } from "redux";
import navReducer from "./navReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const AppReducer = combineReducers({
  nav: navReducer,
  auth: authReducer,
  user: userReducer
});

export default AppReducer;
