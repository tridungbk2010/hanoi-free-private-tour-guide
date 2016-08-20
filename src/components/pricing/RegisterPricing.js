/**
 * Created by Chris Ho on 8/19/2016.
 */
import React, {Component, PropTypes} from 'react';
import RequestDemo from '../../containers/register/RequestDemo';

class RegisterPricing extends Component {
  render() {
    return (
      <RequestDemo source="Web-pricing"/>
    );
  }
}

RegisterPricing.propTypes = {
  optionalNumber: PropTypes.number
};

export default RegisterPricing;
