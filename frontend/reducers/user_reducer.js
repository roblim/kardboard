import merge from 'lodash/merge';

import { RECEIVE_AUTHORS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_COLLABORATORS,
         RECEIVE_BOARD_SHARE,
         REMOVE_BOARD_SHARE } from '../actions/board_share_actions';

const UserReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_AUTHORS:
      return merge({}, state, action.users);
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState[action.currentUser.id] = action.currentUser;
      return newState;
    case RECEIVE_COLLABORATORS:
      return merge({}, state, action.users);
    case RECEIVE_BOARD_SHARE:
      newState = merge({}, state);
      newState[action.collaborator.id] = action.collaborator;
      return newState;
    case REMOVE_BOARD_SHARE:
      newState = merge({}, state);
      delete newState[action.collaborator.id];
      return newState;
    default:
      return state;
  };
};

export default UserReducer;
