import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import UserDetailsReducers from "./UserDetailsReducers";
import CounterSlice  from "./CounterSlice";
import usersSlice from "./UserDataSlice";

const rootReducer = combineReducers({
  Counter: CounterReducer,
  UserDetails: UserDetailsReducers,
  CounterSlice: CounterSlice,
  UsersData: usersSlice
});

export default rootReducer;