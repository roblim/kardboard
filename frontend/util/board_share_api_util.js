const getCollaborators = (boardId) => (
  $.ajax({
    url: `/api/board_shares/${boardId}/collaborators`
  })
);

const postBoardShare = (boardId, collaboratorId) => (
  $.ajax({
    url: `/api/board_shares/${boardId}/${collaboratorId}`,
    method: 'post'
  })
)

const deleteBoardShare = (boardId, collaboratorId) => (
  $.ajax({
    url: `/api/board_shares/${boardId}/${collaboratorId}`,
    method: 'delete'
  })
)

export { getCollaborators, postBoardShare, deleteBoardShare };
