export const selectReviewModule = (state) => state.review;

export const selectReviews = (state) =>
  Object.values(selectReviewModule(state).entities);

export const selectReviewIds = (state) =>
  Object.values(selectReviewModule(state).ids);

export const selectReviewById = (state, reviewId) =>
  selectReviewModule(state).entities[reviewId];