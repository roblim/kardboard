import { getAuthors, searchUsers } from '../util/user_api_util';

export const RECEIVE_AUTHORS = 'RECEIVE_AUTHORS';
export const RECEIVE_USERS_SEARCH_RESULTS = 'RECEIVE_USERS_SEARCH_RESULTS';

export const receiveAuthors = (authors) => ({
  type: RECEIVE_AUTHORS,
  users: authors
});

export const receiveUsersSearchResults = (usersSearchResults) => ({
  type: RECEIVE_USERS_SEARCH_RESULTS,
  usersSearchResults
});

export const fetchAuthors = (cardId) => (dispatch) => (
  getAuthors(cardId).then(
    authors => dispatch(receiveAuthors(authors))
  )
);

export const searchUsers = (query) => (dispatch) => {
  if (query) {
    searchUsers(query).then(
      usersSearchResults => dispatch(
                              receiveUsersSearchResults(
                                usersSearchResults)
                              )
    );
  } else {
    dispatch({
      type: RECEIVE_USERS_SEARCH_RESULTS,
      usersSearchResults: {}
    });
  }
};
