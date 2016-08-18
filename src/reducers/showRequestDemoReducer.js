/**
 * Created by Chris Ho on 8/16/2016.
 */
import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function showRequestDemoReducer(state = initialState.hasShowLoginPage, action) {
  switch (action.type) {
    case actionTypes.SHOW_REQUEST_DEMO_PAGE:
      return action.showRequestDemoPage;
    default:
      return state;
  }
}
