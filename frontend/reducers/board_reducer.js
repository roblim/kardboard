import merge from 'lodash/merge';

import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
  DELETE_BOARD
} from '../actions/board_actions';

const BoardReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARDS:
      return merge({}, state, action.boards);
    case RECEIVE_BOARD:
      newState = merge({}, state);
      newState[action.board.id] = action.board;
      return newState;
    case DELETE_BOARD:
      newState = merge({}, state);
      delete newState[action.board.id];
      return newState;
    default:
      return state;
  }
};

export default BoardReducer;
