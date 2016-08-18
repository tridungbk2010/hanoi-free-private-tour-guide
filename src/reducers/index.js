import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import sendInBlueReducer from './sendInBlueReducer';
import scrollToDivReducer from './scrollToDivReducer';
import showingPageReducer from './showingPageReducer';
import showRegisterPageReducer from './showRegisterPageReducer';
import showingRequestSuccessReducer from './showingRequestSuccessReducer';
import sourceReducer from './sourceReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  sendInBlueReducer,
  scrollToDivReducer,
  showingPageReducer,
  showingRequestSuccessReducer,
  showRegisterPageReducer,
  sourceReducer
});

export default rootReducer;
