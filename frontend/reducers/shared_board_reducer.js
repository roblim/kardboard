import merge from 'lodash/merge';

import { RECEIVE_SHARED_BOARDS } from '../actions/board_share_actions';

const SharedBoardReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SHARED_BOARDS:
      return merge({}, state, action.sharedBoards);
    default:
      return state;
  }
};

export default SharedBoardReducer;
