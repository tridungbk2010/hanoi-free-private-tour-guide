/**
 * Created by Chris Ho on 8/14/2016.
 */
import * as actionTypes from "../constants/actionTypes";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";
import axios from "axios";

export function subscribeSuccess(emailData) {
  console.log("sendInBlueEmail", emailData);
  return {
    type: actionTypes.SUBSCRIBE_SUCCESS,
    emailData
  }
}

export function subscribe(dataForm) {
  console.log("subscribe-dataForm", dataForm);
  return dispatch => {
    dispatch(beginAjaxCall());
    const url = "http://52.74.10.130:3000/api/sendinblue/users";
    const config = {
      headers: {
        "authorization": "Bearer XbYatW9JDPnBrOjQ"
      }
    };
    const linkSource = dataForm.source && '&source=' + dataForm.source;
    const data =
      'email=' + dataForm.email +
      '&first_name=' + dataForm.firstName +
      '&last_name=' + dataForm.lastName +
      '&phone_number=' + dataForm.phoneNumber +
      '&company_name=' + dataForm.companyName +
      '&company_size=' + dataForm.companySize +
      '&country=' + dataForm.country +
      '&hr_brief=' + dataForm.hrBrief +
      linkSource;

    return axios.post(url, data, config).then(response => {
      dispatch(subscribeSuccess(response.data.data));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw (error);
    });
  }
}
