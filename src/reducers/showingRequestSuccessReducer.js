/**
 * Created by Chris Ho on 8/17/2016.
 */
import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function showingRequestSuccessReducer(state = initialState.hasShowSuccessPage, action) {
  switch (action.type) {
    case actionTypes.SHOW_REQUEST_SUCCESS_PAGE:
      return action.hasRequestSuccessPage;

    default:
      return state;
  }
}
