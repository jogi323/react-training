import { USER_DATA_SUCCESS, USER_DATA_FAILURE } from "../Constants/Constants";

const initialState = {
    data: [],
    showAlert: false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case USER_DATA_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        case USER_DATA_FAILURE:
            return {
                ...state,
                showAlert: true
            }
        default:
            return state;
    }
}
