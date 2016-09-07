/**
 * Created by Chris Ho on 9/7/2016.
 */
import * as actionTypes from '../constants/actionTypes';
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";
import axios from "axios";

export function saveTouristSuccess(data) {
  return {
    type:actionTypes.SAVE_TOURIST_SUCCESS,
    data
  }
}

export function saveTourist(tourist) {
  const url = "http://hanoifreeprivatetourguide.com/tour_api/public/store-tour";
  return dispatch =>{
    dispatch(beginAjaxCall());
    return axios({
      method: 'post',
      url: url,
      params: {
        fullname: tourist.tourist,
        tour_name: tourist.tour,
        departure_date:tourist.date + "-" + tourist.time,
        tourist_number:tourist.no,
        nation:tourist.country,
        email:tourist.email,
        pickup_address:tourist.pickup,
        other_request:tourist.request
      }
    }).then(reponse =>{
      dispatch(saveTouristSuccess(reponse.data));
    }).catch(error =>{
      dispatch(ajaxCallError(error));
    });
  }
}


