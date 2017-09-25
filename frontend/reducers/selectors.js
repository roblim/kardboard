export const selectBoards = (state) => {
  let boards = Object.values(state.entities.boards);
  return boards;
};

export const selectLists = (state, boardId) => {
  let lists = Object.values(state.entities.lists);
  lists = lists.filter((list) => list.boardId === boardId);
  return lists;
}

export const selectCards = (state, listId) => {
  let cards = Object.values(state.entities.cards);
  cards = cards.filter((card) => card.listId === listId);
  return cards;
}
