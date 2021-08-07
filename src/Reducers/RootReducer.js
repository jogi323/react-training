import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({
  Counter: CounterReducer
});

export default rootReducer;