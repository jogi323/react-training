import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import UserDataReducer from "./UserDataReducer";

const rootReducer = combineReducers({
  Counter: CounterReducer,
  UserData: UserDataReducer
});

export default rootReducer;