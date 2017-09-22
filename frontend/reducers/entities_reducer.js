import { combineReducers } from 'redux';
import BoardReducer from './board_reducer';

const EntitiesReducer = combineReducers({
  boards: BoardReducer
});

export default EntitiesReducer;
