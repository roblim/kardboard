import { combineReducers } from 'redux';
import usersSearchResultsReducer from './users_search_results_reducer';

const uiReducer = combineReducers({
  usersSearchResults: usersSearchResultsReducer
});

export default uiReducer;
