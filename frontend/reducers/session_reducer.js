import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  LOG_OUT
} from '../actions/session_actions';

const _nullUser = {
  currentUser: null
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case LOG_OUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
