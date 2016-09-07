/**
 * Created by Chris Ho on 9/7/2016.
 */
import * as actionTypes from '../constants/actionTypes';

export function showLayout(showUp) {
  return {
    type:actionTypes.SHOW_LAYOUT_OVERLAY,
    showUp
  }
}
