import merge from 'lodash/merge'
import { RECEIVE_LISTS, RECEIVE_LIST, DELETE_LIST } from '../actions/list_actions';

const ListReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTS:
      return merge({}, state, action.lists);
    case RECEIVE_LIST:
      newState = merge({}, state);
      newState[action.list.id] = action.list;
      return newState;
    case DELETE_LIST:
      newState = merge({}, state);
      delete newState[action.list.id];
      return newState;
    default:
      return state;
  }
};

export default ListReducer;
