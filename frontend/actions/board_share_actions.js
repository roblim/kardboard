import { getCollaborators,
         postBoardShare,
         deleteBoardShare } from '../util/board_share_api_util';

export const RECEIVE_COLLABORATORS = 'RECEIVE_COLLABORATORS';
export const RECEIVE_BOARD_SHARE = 'RECEIVE_BOARD_SHARE';
export const REMOVE_BOARD_SHARE = 'REMOVE_BOARD_SHARE';

export const receiveCollaborators = (collaborators, boardId) => ({
  type: RECEIVE_COLLABORATORS,
  users: collaborators,
  boardId
});

export const receiveBoardShare = (boardShare) => ({
  type: RECEIVE_BOARD_SHARE,
  collaborator: boardShare.collaborator,
  boardShare
});

export const removeBoardShare = (boardShare) => ({
  type: REMOVE_BOARD_SHARE,
  collaborator: boardShare.collaborator,
  boardShare
});

export const fetchCollaborators = (boardId) => (dispatch) => (
  getCollaborators(boardId).then(
    collaborators => dispatch(receiveCollaborators(collaborators, boardId))
  )
);

export const createBoardShare = (boardId, collaboratorId) => (dispatch) => (
  postBoardShare(boardId, collaboratorId).then(
    boardShare => dispatch(receiveBoardShare(boardShare))
  )
);

export const destroyBoardShare = (boardId, collaboratorId) => (dispatch) => (
  deleteBoardShare(boardId, collaboratorId).then(
    boardShare => dispatch(removeBoardShare(boardShare))
  )
);
