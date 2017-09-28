import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import BoardReducer from './board_reducer';
import ListReducer from './list_reducer';
import CardReducer from './card_reducer';
import CommentReducer from './comment_reducer';

const EntitiesReducer = combineReducers({
  users: UserReducer,
  boards: BoardReducer,
  lists: ListReducer,
  cards: CardReducer,
  comments: CommentReducer
});

export default EntitiesReducer;
