export const selectUserModule = (state) => state.user;

export const selectUsers = (state) =>
  selectUserModule(state).entities;