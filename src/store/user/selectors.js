export const selectUserModule = (state) => state.user;

export const selectUser = (state) =>
  Object.values(selectUserModule(state).entities);