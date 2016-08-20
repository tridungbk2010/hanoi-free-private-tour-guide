/**
 * Created by Chris Ho on 8/15/2016.
 */
import * as actionTypes from "../constants/actionTypes";

export function clickMenu(menu) {
  return {
    type: actionTypes.CLICK_MENU,
    menu
  }
}
