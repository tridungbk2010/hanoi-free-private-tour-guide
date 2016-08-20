/**
 * Created by Chris Ho on 8/20/2016.
 */
import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function menuReducer(state = initialState.menu, action) {
  switch (action.type) {
    case actionTypes.CLICK_MENU:
      return action.menu;

    default:
      return state;
  }
}
