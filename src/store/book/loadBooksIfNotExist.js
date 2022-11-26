import { bookSlice } from ".";
import { prepareData } from "../utils";

export const loadBooksIfNotExist = (genreId) => (dispatch) => {
  // if (selectGenres(getState())?.length > 0) {
  //   return;
  // }

  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books?genreId=${genreId}`)
    .then((responce) => responce.json())
    .then((genres) => {
      dispatch(bookSlice.actions.successLoading(prepareData(genres)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
