/**
 * Created by Chris Ho on 9/7/2016.
 */
import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function touristReducer(state = initialState.tourist, action) {
  switch (action.type) {
    case actionTypes.SAVE_TOURIST_SUCCESS:
      return action.data;

    default:
      return state;
  }
}
