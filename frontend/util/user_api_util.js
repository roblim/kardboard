const getAuthors = (cardId) => (
  $.ajax({
    url: `/api/cards/${cardId}/users`
  })
);

export { getAuthors };
