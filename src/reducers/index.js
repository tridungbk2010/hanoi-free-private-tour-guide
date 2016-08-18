import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import sendInBlueReducer from './sendInBlueReducer';
import scrollToDivReducer from './scrollToDivReducer';
import showingPageReducer from './showingPageReducer';
import showRequestDemoReducer from './showRequestDemoReducer';
import showingRequestSuccessReducer from './showingRequestSuccessReducer';
import sourceReducer from './sourceReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  sendInBlueReducer,
  scrollToDivReducer,
  showingPageReducer,
  showingRequestSuccessReducer,
  showRequestDemoReducer,
  sourceReducer
});

export default rootReducer;
