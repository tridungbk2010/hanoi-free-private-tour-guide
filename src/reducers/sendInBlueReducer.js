/**
 * Created by Chris Ho on 8/14/2016.
 */
import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function sendInBlueReducer(state = initialState.sendInBlueEmail, action) {
  switch (action.type) {
    case actionTypes.SUBSCRIBE_SUCCESS:
      return Object.assign({}, action.emailData);

    default:
      return state;
  }
}
