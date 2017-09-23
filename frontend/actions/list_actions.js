import { getLists,
         postList,
         patchList,
         deleteList } from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export const receiveLists = (lists) => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveList = (list) => ({
  type: RECEIVE_LIST,
  list
})

export const removeList = (list) => ({
  type: DELETE_LIST,
  list
})

export const fetchLists = () => (dispatch) => (
  getLists.then(
    lists => dispatch(receiveLists(lists))
  )
)

export const createList = (list) => (dispatch) => (
  postList(list).then(
    createdList => dispatch(receiveList(createdList))
  )
)

export const updateList = (list) => (dispatch) => (
  patchList(list).then(
    updatedList => dispatch(receiveList(updatedList))
  )
)

export const destroyList = (list) => (dispatch) => (
  deleteList(list).then(
    deletedList => dispatch(removeList(list))
  )
)
