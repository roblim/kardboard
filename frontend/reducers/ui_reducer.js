import { combineReducers } from 'redux';
import userSearchResultsReducer from './user_search_results_reducer';

const uiReducer = combineReducers({
  userSearchResults: userSearchResultsReducer
});

export default uiReducer;
