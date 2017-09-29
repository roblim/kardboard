const getAuthors = (cardId) => (
  $.ajax({
    url: `/api/cards/${cardId}/users`
  })
);

const searchUsers = (query) => (
  $.ajax({
    url: `api/users/search/${query}`
  })
);

export { getAuthors };
