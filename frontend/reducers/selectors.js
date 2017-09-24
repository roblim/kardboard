export const selectBoards = (state) => {
  let boards = Object.values(state.entities.boards);
  return boards;
};

export const selectLists = (state) => {
  let lists = Object.values(state.entities.lists);
  return lists;
}
