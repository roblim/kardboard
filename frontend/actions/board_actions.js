import { getBoards,
         getBoard,
         postBoard,
         patchBoard,
         deleteBoard } from '../util/board_api_util.js';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';

export const receiveBoards = (boards) => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveBoard = (board) => ({
  type: RECEIVE_BOARD,
  board
});

export const removeBoard = (board) => ({
  type: DELETE_BOARD,
  board
});

export const fetchBoards = () => (dispatch) => (
  getBoards().then(
    boards => dispatch(receiveBoards(boards))
  )
);

export const fetchBoard = (boardId) => (dispatch) => (
  getBoard(boardId).then(
    board => dispatch(receiveBoard(board))
  )
);

export const createBoard = (board) => (dispatch) => (
  postBoard(board).then(
    createdBoard => dispatch(receiveBoard(createdBoard))
  )
);

export const updateBoard = (board) => (dispatch) => (
  patchBoard(board).then(
    updatedBoard => dispatch(receiveBoard(updatedBoard))
  )
);

export const destroyBoard = (boardId) => (dispatch) => (
  deleteBoard(boardId).then(
    deletedBoard => dispatch(removeBoard(deletedBoard))
  )
);
