import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ClassesReducer from './classlist_reducer';
import ClassDetailReducer from './classDetail_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  classes: ClassesReducer,
  classDetail: ClassDetailReducer,
  errors: ErrorReducer
});

export default RootReducer;
