import { combineReducers } from 'redux';
import BoardReducer from './board_reducer';
import ListReducer from './list_reducer';

const EntitiesReducer = combineReducers({
  boards: BoardReducer,
  lists: ListReducer
});

export default EntitiesReducer;
