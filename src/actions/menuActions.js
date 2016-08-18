/**
 * Created by Chris Ho on 8/15/2016.
 */
import * as actionTypes from "../constants/actionTypes";

export function clickMenu() {
  return dispatch => {
    dispatch({
      type:actionTypes.SHOW_LOGIN_PAGE,
      hasShow:false
    });
    dispatch({
      type:actionTypes.SHOW_REQUEST_DEMO_PAGE,
      showRequestDemoPage:false
    });
    dispatch({
      type:actionTypes.SHOW_REQUEST_SUCCESS_PAGE,
      hasRequestSuccessPage:false
    });
  }
}
