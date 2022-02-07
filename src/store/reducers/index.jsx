import { combineReducers } from "redux";
import { signUpReducer } from "./signUpReducer";
import { loginReducer } from "./loginReducer"

export const allReducers = combineReducers({
  signup: signUpReducer,
  login: loginReducer,
});
