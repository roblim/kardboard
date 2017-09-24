import { combineReducers } from 'redux';
import BoardReducer from './board_reducer';
import ListReducer from './list_reducer';
import CardReducer from './card_reducer';

const EntitiesReducer = combineReducers({
  boards: BoardReducer,
  lists: ListReducer,
  cards: CardReducer
});

export default EntitiesReducer;
