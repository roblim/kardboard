const getLists = (boardId) => (
  $.ajax({
    url: `/api/boards/${boardId}/lists`
  })
);

const postList = (list) => (
  $.ajax({
    url: '/api/lists',
    method: 'post',
    data: { list }
  })
);

const patchList = (list) => (
  $.ajax({
    url: `/api/lists/${list.id}`,
    method: 'patch',
    data: { list }
  })
);

const deleteList = (listId) => (
  $.ajax({
    url: `/api/lists/${listId}`,
    method: 'delete'
  })
);

export { getLists, postList, patchList, deleteList };
