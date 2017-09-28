import merge from 'lodash/merge';

import { RECEIVE_AUTHORS } from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_AUTHORS:
      return merge({}, state, action.users);
    default:
      return state;
  };
};

export default UserReducer;
