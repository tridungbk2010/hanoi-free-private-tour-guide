/**
 * Created by Chris Ho on 8/16/2016.
 */
import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function showingPageReducer(state = initialState.hasShowLoginPage, action) {
  switch (action.type) {
    case actionTypes.SHOW_LOGIN_PAGE:
      return action.hasShow;

    default:
      return state;
  }
}
