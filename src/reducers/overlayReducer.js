/**
 * Created by Chris Ho on 9/7/2016.
 */
import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function overlayReducer(state = initialState.overlayTour, action) {
  switch (action.type) {
    case actionTypes.SHOW_LAYOUT_OVERLAY:
      return action.overlayTour;

    default:
      return state;
  }
}
