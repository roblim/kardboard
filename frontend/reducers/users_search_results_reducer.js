import { RECEIVE_USERS_SEARCH_RESULTS } from '../actions/user_actions';
import merge from 'lodash/merge';

const usersSearchResultsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS_SEARCH_RESULTS:
      return merge({}, state, action.usersSearchResults);
    default:
      return state;
  }
};

export default usersSearchResultsReducer;
