import merge from 'lodash/merge';
import { RECEIVE_CARDS,
         RECEIVE_CARD,
         DELETE_CARD } from '../actions/card_actions';

const CardReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CARDS:
      return merge({}, state, action.cards);
    case RECEIVE_CARD:
      newState = merge({}, state);
      newState[action.card.id] = action.card;
      return newState;
    case DELETE_CARD:
      newState = merge({}, state);
      delete newState[action.card.id];
      return newState;
    default:
      return state;
  }
};

export default CardReducer;
