const fetchAuthors = (cardId) => {
  $.ajax({
    url: `/api/cards/${cardId}/users`
  })
};
