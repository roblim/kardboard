const getBoards = () => {
  let userId = window.currentUser.id;
  return(
    $.ajax({
    url: `/api/users/${userId}/boards`
    })
  );
};

const getBoard = null;

const postBoard = null;

const patchBoard = null;

const deleteBoard = null;

export { getBoards, getBoard, postBoard, patchBoard, deleteBoard };
