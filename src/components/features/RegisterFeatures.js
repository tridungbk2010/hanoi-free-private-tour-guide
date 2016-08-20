/**
 * Created by Chris Ho on 8/19/2016.
 */
import React, {Component, PropTypes} from "react";
import RequestDemo from "../../containers/register/RequestDemo";

class RegisterFeatures extends Component {
  render() {
    return (
      <RequestDemo source = "Web-features"/>
    );
  }
}

RegisterFeatures.propTypes = {
  optionalNumber: PropTypes.number
};

export default RegisterFeatures;
