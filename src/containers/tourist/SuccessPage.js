/**
 * Created by Chris Ho on 9/7/2016.
 */
import React, {Component, PropTypes} from 'react';
import './SucessPage.scss';

class SuccessPage extends Component {
  render() {
    return (
      <div className="success-page">
        <div className="success-page-text">
          <span className="noticed">
            <i className="fa fa-check-square-o fa-lg icon-tick" />
            Your request has been performed successful!
          </span>
          <p>
            We will send you an email to confirm.
            In the mean time, please take a view some our activities!
          </p>
          <div className="my-channel">
           <p> <i className="fa fa-youtube-play fa-3x youtube-icon" /></p>
            <span>Our channel</span>
          </div>
        </div>
      </div>
    );
  }
}

SuccessPage.propTypes = {
  optionalNumber: PropTypes.number
};

export default SuccessPage;
