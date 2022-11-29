import { userSlice } from ".";

export const loadUsersIfNotExist = (userId) => (dispatch) => {
  dispatch(userSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/users?userId=${userId}`)
    .then((responce) => responce.json())
    .then((user) => {
      const result = {
        entities: user,
        ids: user.id
      };
      dispatch(userSlice.actions.successLoading(result));
    })
    .catch(() => {
      dispatch(userSlice.actions.failLoading());
    });
};