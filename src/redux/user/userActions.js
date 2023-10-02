import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}
function fetchUsersSuccess(user) {
  return { type: FETCH_USERS_SUCCESS, payload: user };
}
function fetchUsersFailure(err) {
  return { type: FETCH_USERS_SUCCESS, payload: err };
}
export function fetchUsers() {
  return (dispatch) => {
    dispatch(() => fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((res) => {
        dispatch(() => fetchUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(() => fetchUsersFailure(err.message));
      });
  };
}
