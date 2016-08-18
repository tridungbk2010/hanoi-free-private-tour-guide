/**
 * Created by Chris Ho on 8/16/2016.
 */
import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function scrollReducer(state = initialState.menu, action) {
  switch (action.type) {
    case actionTypes.CLICK_MENU:
      return (action.menu !== "Blog" || action.menu !== "Login" )&& action.menu;
    default:
      return state;
  }
}
