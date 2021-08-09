import { createStore, applyMiddleware} from "redux";
import rootReducer from "../Reducers/RootReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

function loggerTest({getState}) {
  return next => (action) => {
    // console.log("Will update", action);
    const returnValue = next(action);
    // console.log(getState(), "state after update");
    return returnValue;
  }
}

export default function configureStore(preloadedState) {
  const middleware = [thunkMiddleware, loggerTest];

  const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middleware)));
  // console.log(store.getState());
  return store;
}