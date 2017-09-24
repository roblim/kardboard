export const selectBoards = (state) => {
  const boards = Object.values(state.entities.boards);
  return boards;
};

export const selectLists = (state) => {
  const lists = Object.values(state.entities.lists);
  return lists;
}

export const selectCards = (state) => {
  const cards = Object.values(state.entities.cards);
  return cards; 
}
