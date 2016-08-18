/**
 * Created by Chris Ho on 8/16/2016.
 */
import * as actionTypes from '../constants/actionTypes';

export function showLoginPage(hasShow, source) {
  return dispatch =>{
    dispatch({
      type:actionTypes.SHOW_REGISTER_PAGE,
      hasShowRegisterPage:false
    });
    dispatch({
      type:actionTypes.SHOW_REQUEST_SUCCESS_PAGE,
      hasRequestSuccessPage:false
    });
    dispatch({
      type:actionTypes.SHOW_LOGIN_PAGE,
      hasShow,
      source
    })
  }
}

export function showRegisterPage(hasShowRegisterPage) {
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
      type:actionTypes.SHOW_REGISTER_PAGE,
      hasShowRegisterPage
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
      type:actionTypes.SHOW_REGISTER_PAGE,
      hasShowRegisterPage:false
    });
    dispatch({
      type:actionTypes.SHOW_REQUEST_SUCCESS_PAGE,
      hasRequestSuccessPage
    });
  }
}
