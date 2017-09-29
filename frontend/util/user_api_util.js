const getAuthors = (cardId) => (
  $.ajax({
    url: `/api/cards/${cardId}/users`
  })
);

const getUserSearchResults = (query) => (
  $.ajax({
    url: `api/users/search/${query}`
  })
);

export { getAuthors, getUserSearchResults };
