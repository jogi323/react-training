import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import UserDetailsReducers from "./UserDetailsReducers";

const rootReducer = combineReducers({
  Counter: CounterReducer,
  UserDetails: UserDetailsReducers
});

export default rootReducer;