/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {PropTypes} from 'react';
import './Footer.scss';

const Footer =()=> {
    return (
      <div className="footer">
        <a href="http://flowzone.cloud/terms" className="term">TERMS & PRIVACY POLICY</a>
        <a href="http://wahlandcase.com/" className="copyRight">© Wahl & Case</a>
      </div>
    );
  };

Footer.propTypes = {
  optionalNumber: PropTypes.number
};

export default Footer;
