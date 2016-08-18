/**
 * Created by Chris Ho on 8/17/2016.
 */
import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function sourceReducer(state = initialState.source, action) {
  switch (action.type) {
    case actionTypes.GET_SOURCE:
      return action.source;

    default:
      return state;
  }
}
