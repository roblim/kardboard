import { getCards,
         getCard,
         postCard,
         patchCard,
         deleteCard } from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const receiveCards = (cards) => ({
  type: RECEIVE_CARDS,
  cards
});

export const receiveCard = (card) => ({
  type: RECEIVE_CARD,
  card
});

export const removeCard = (card) => ({
  type: DELETE_CARD,
  card
})

export const fetchCards = (listId) => (dispatch) => (
  getCards(listId).then(
    cards => dispatch(receiveCards(cards))
  )
);

export const fetchCard = (cardId) => (dispatch) => (
  getCard(cardId).then(
    card => dispatch(receiveCard(card))
  )
);

export const createCard = (card) => (dispatch) => (
  postCard(card).then(
    createdCard => dispatch(receiveCard(createdCard))
  )
);

export const updateCard = (card) => (dispatch) => (
  patchCard(card).then(
    updatedCard => dispatch(receiveCard(updatedCard))
  )
);

export const destroyCard = (card) => (dispatch) => (
  deleteCard(card).then(
    deletedCard => dispatch(removeCard(card))
  )
);
