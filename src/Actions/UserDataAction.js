import axios from "axios";
import { USER_DATA_SUCCESS, USER_DATA_FAILURE } from "../Constants/Constants";

export const getUserData = (data) => (dispatch) => {
    axios.get("https://randomuser.me/api/?results=100").then((res) => {
        console.log(res);
        dispatch({
            type: USER_DATA_SUCCESS,
            data: res.data.results
        })
    })
    .catch((err) => {
        console.log(err);
        dispatch({
            type: USER_DATA_FAILURE,
            data: {msg: "User data API is failed"}
        })
    })
}
