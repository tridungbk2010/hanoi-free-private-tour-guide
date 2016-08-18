/**
 * Created by Chris Ho on 8/16/2016.
 */
import * as actionTypes from '../constants/actionTypes';

export function showLoginPage(hasShow) {
  return dispatch =>{
    dispatch({
      type:actionTypes.SHOW_REQUEST_DEMO_PAGE,
      showRequestDemoPage:false
    });
    dispatch({
      type:actionTypes.SHOW_REQUEST_SUCCESS_PAGE,
      hasRequestSuccessPage:false
    });
    dispatch({
      type:actionTypes.SHOW_LOGIN_PAGE,
      hasShow
    })
  }
}

export function showRequestDemoPage(showRequestDemoPage) {
  return dispatch =>{
    dispatch({
      type:actionTypes.SHOW_LOGIN_PAGE,
      hasShow:false
    });
    dispatch({
      type:actionTypes.SHOW_REQUEST_SUCCESS_PAGE,
      hasRequestSuccessPage:false
    });
    dispatch({
      type:actionTypes.SHOW_REQUEST_DEMO_PAGE,
      showRequestDemoPage
    });
  }
}

export function showRequestSuccessPage(hasRequestSuccessPage) {
  return dispatch =>{
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
      hasRequestSuccessPage
    });
  }
}
