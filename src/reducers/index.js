import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import sendInBlueReducer from './sendInBlueReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  sendInBlueReducer,
  menuReducer
});

export default rootReducer;
