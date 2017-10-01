import merge from 'lodash/merge';

import { RECEIVE_AUTHORS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

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
    default:
      return state;
  };
};

export default UserReducer;
