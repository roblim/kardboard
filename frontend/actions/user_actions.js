import { getAuthors, getUserSearchResults } from '../util/user_api_util';

export const RECEIVE_AUTHORS = 'RECEIVE_AUTHORS';
export const RECEIVE_USER_SEARCH_RESULTS = 'RECEIVE_USER_SEARCH_RESULTS';

export const receiveAuthors = (authors) => ({
  type: RECEIVE_AUTHORS,
  users: authors
});

export const receiveUserSearchResults = (userSearchResults) => ({
  type: RECEIVE_USER_SEARCH_RESULTS,
  userSearchResults
});

export const fetchAuthors = (cardId) => (dispatch) => (
  getAuthors(cardId).then(
    authors => dispatch(receiveAuthors(authors))
  )
);

export const searchUsers = (query) => (dispatch) => {
  if (query) {
    getUserSearchResults(query).then(
      userSearchResults => dispatch(
                              receiveUserSearchResults(
                                userSearchResults)
                              )
    );
  } else {
    dispatch({
      type: RECEIVE_USER_SEARCH_RESULTS,
      userSearchResults: {}
    });
  }
};
