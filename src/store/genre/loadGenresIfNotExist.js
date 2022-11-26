import { genreSlice } from ".";
import { prepareData } from "../utils";
import { selectGenres } from "./selectors";

export const loadGenresIfNotExist = (dispatch, getState) => {
  if (selectGenres(getState())?.length > 0) {
    return;
  }

  dispatch(genreSlice.actions.startLoading());
  fetch("http://localhost:3001/api/genres")
    .then((responce) => responce.json())
    .then((genres) => {
      dispatch(genreSlice.actions.successLoading(prepareData(genres)));
    })
    .catch(() => {
      dispatch(genreSlice.actions.failLoading());
    });
};
