export const selectBoards = (state) => {
  let boards = Object.values(state.entities.boards);
  return boards;
};
