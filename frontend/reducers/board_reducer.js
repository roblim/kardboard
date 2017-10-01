import merge from 'lodash/merge';

import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
  DELETE_BOARD
} from '../actions/board_actions';

import { RECEIVE_COLLABORATORS,
         RECEIVE_BOARD_SHARE,
         REMOVE_BOARD_SHARE } from '../actions/board_share_actions';

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
    case RECEIVE_COLLABORATORS:
      newState = merge({}, state);
      newState[action.boardId]['collaborators'] = Object.keys(action.users).map(id => parseInt(id));
      return newState;
    case RECEIVE_BOARD_SHARE:
      newState = merge({}, state);
      if (newState[action.boardShare.boardId]['collaborators']) {
        newState[action.boardShare.boardId]['collaborators'].push(parseInt(action.boardShare.collaboratorId))
      } else {
        newState[action.boardShare.boardId]['collaborators'] = [parseInt(action.boardShare.collaboratorId)]
      }
      return newState;
    case REMOVE_BOARD_SHARE:
      newState = merge({}, state);
      let collaborators = newState[action.boardShare.boardId].collaborators;
      let collaboratorIdx = collaborators.findIndex(el => el === parseInt(action.boardShare.collaboratorId));
      collaborators.splice(collaboratorIdx, 1);
      newState[action.boardShare.boardId].collaborators = collaborators;
      return newState;
    default:
      return state;
  }
};

export default BoardReducer;
