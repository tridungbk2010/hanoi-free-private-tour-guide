/**
 * Created by Chris Ho on 8/17/2016.
 */
import * as actionTypes from '../constants/actionTypes';

export function getSource(source) {
  return {
    type:actionTypes.GET_SOURCE,
    source
  }
}
