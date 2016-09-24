/**
 * Created by Chris Ho on 9/7/2016.
 */
import * as actionTypes from '../constants/actionTypes';

export function showLayout(overlayTour) {
  return {
    type:actionTypes.SHOW_LAYOUT_OVERLAY,
    overlayTour
  }
}
