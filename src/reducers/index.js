import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import sendInBlueReducer from './sendInBlueReducer';
import menuReducer from './menuReducer';
import overlayReducer from './overlayReducer';
import touristReducer from './touristReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  sendInBlueReducer,
  menuReducer,
  overlayReducer,
  touristReducer
});

export default rootReducer;
