export const selectGenreModule = (state) => state.genre;

export const selectGenres = (state) =>
  Object.values(selectGenreModule(state).entities);

export const selectGenreBookIds = (state, genreId) =>
  selectGenreModule(state).entities[genreId].books;