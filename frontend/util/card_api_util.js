const getCards = (listId) => (
  $.ajax({
    url: `/api/lists/${listId}/cards`
  })
);

const getCard = (cardId) => (
  $.ajax({
    url: `/api/cards/${cardId}`
  })
)

const postCard = (card) => (
  $.ajax({
    url: '/api/cards',
    method: 'post',
    data: { card }
  })
)

const patchCard = (card) => (
  $.ajax({
    url: `/api/cards/${card.id}`,
    metod: 'patch',
    data: { card }
  })
);

const deleteCard = (cardId) => (
  $.ajax({
    url: `/api/cards/${cardId}`
  })
)

export { getCards, getCard, postCard, patchCard, deleteCard };
