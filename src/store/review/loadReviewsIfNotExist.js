import { reviewSlice } from ".";
import { prepareData } from "../utils";

export const loadReviewsIfNotExist = (bookId) => (dispatch) => {
  dispatch(reviewSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/reviews?bookId=${bookId}`)
    .then((responce) => responce.json())
    .then((reviews) => {
      dispatch(reviewSlice.actions.successLoading(prepareData(reviews)));
    })
    .catch(() => {
      dispatch(reviewSlice.actions.failLoading());
    });
};