/**
 * Created by Chris Ho on 8/16/2016.
 */
import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function showRegisterPageReducer(state = initialState.hasShowLoginPage, action) {
  switch (action.type) {
    case actionTypes.SHOW_REGISTER_PAGE:
      return action.hasShowRegisterPage;
    default:
      return state;
  }
}
