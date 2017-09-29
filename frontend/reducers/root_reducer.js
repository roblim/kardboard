import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';

const AppReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: uiReducer
});

const RootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = undefined
  }
  return AppReducer(state, action)
}

export default RootReducer;
