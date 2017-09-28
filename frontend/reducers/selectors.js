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

export const selectComments = (state, cardId) => {
  let comments = Object.values(state.entities.comments);
  comments = comments.filter((comment) => comment.cardId === cardId);
  return comments;
}

export const selectAuthors = (state, cardId) => {
  let comments = selectComments(state, cardId);
  let authors = [];
  comments.forEach((comment) => authors.push(state.entities.users[comment.authorId]));
  return authors;
}
