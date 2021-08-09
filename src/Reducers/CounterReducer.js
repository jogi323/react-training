
const initialState = {
  Count: 5
};

export default function (state = initialState, action) {
  // console.log(action)
  switch(action.type) {
    case "increment":
      state.Count++;
      return {
        ...state,
        Count: state.Count
      }
    case "decrement":
      state.Count--;
      return {
        ...state,
        Count: state.Count
      }
    default:
      return state;
  }
}
