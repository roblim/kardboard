const getBoards = () => {
  let userId = window.currentUser.id;
  return(
    $.ajax({
    url: `/api/users/${userId}/boards`
    })
  );
};

const getBoard = (boardId) => (
  $.ajax({
    url: `/api/boards/${boardId}`
  })
);

const postBoard = (board) => (
  $.ajax({
    method: 'post',
    url: '/api/boards',
    data: { board }
  })
);

const patchBoard = (board) => (
  $.ajax({
    method: 'patch',
    url: `/api/boards/${board.id}`,
    data: { board }
  })
);

const deleteBoard = (boardId) => (
  $.ajax({
    method: 'delete',
    url: `/api/boards/${boardId}`
  })
);

export { getBoards, getBoard, postBoard, patchBoard, deleteBoard };
