import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer
});

export default RootReducer;
