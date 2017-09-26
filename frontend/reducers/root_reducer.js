import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';

const AppReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer
});

const RootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = undefined
  }
  return AppReducer(state, action)
}


export default RootReducer;
