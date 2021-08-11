import { USER_DATA_SUCCESS, USER_DATA_ERROR } from "../Constants/Constants";

const initialState = {
  users: [],
  showError: false
};

export default function (state = initialState, action) {
  switch(action.type) {
    case USER_DATA_SUCCESS:
      return {
        ...state,
        users: action.data
      }
    case USER_DATA_ERROR:
      return {
        ...state,
        users: [],
        showError: true
      }
    default:
      return state;
  }
}
