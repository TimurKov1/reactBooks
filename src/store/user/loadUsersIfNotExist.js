import { userSlice } from ".";
import { prepareData } from "../utils";

export const loadUsersIfNotExist = (dispatch) => {
  dispatch(userSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/users`)
    .then((responce) => responce.json())
    .then((users) => {
      dispatch(userSlice.actions.successLoading(prepareData(users)));
    })
    .catch(() => {
      dispatch(userSlice.actions.failLoading());
    });
};