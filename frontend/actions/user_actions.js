import { getAuthors } from '../util/user_api_util';

export const RECEIVE_AUTHORS = 'RECEIVE_AUTHORS';

export const receiveAuthors = (authors) => ({
  type: RECEIVE_AUTHORS,
  users: authors
});

export const fetchAuthors = (cardId) => (dispatch) => {
  getAuthors(cardId).then(
    authors => dispatch(receiveAuthors(authors))
  );
};
