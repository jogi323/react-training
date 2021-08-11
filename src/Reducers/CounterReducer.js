import { COUNT_INCREMENT, COUNT_DECREMENT } from "../Constants/Constants";

const initialState = {
  Count: 5
};

export default function (state = initialState, action) {
  switch(action.type) {
    case COUNT_INCREMENT:
      state.Count++;
      return {
        ...state,
        Count: state.Count
      }
    case COUNT_DECREMENT:
      state.Count--;
      return {
        ...state,
        Count: state.Count
      }
    default:
      return state;
  }
}
