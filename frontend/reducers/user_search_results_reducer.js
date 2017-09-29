import { RECEIVE_USER_SEARCH_RESULTS } from '../actions/user_actions';
import merge from 'lodash/merge';

const userSearchResultsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_SEARCH_RESULTS:
      return action.userSearchResults;
    default:
      return state;
  }
};

export default userSearchResultsReducer;
