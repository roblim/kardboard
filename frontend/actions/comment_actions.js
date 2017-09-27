import { getComments,
         postComment,
         patchComment,
         deleteComment } from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: DELETE_COMMENT,
  comment
});

export const fetchComments = (cardId) => (dispatch) => (
  getComments(cardId).then(
    comments => dispatch(receiveComments(comments))
  )
);

export const createComment = (comment) => (dispatch) => (
  postComment(comment).then(
    createdComment => dispatch(receiveComment(createdComment))
  )
);

export const updateComment = (comment) => (dispatch) => (
  patchComment(comment).then(
    updatedComment => dispatch(receiveComment(updatedComment))
  )
);

export const destroyComment = (comment) => (dispatch) => (
  deleteComment(comment).then(
    deletedCard => dispatch(removeCard(card))
  )
);
