/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {PropTypes} from 'react';
import './Footer.scss';

const Footer =()=> {
    return (
      <div className="footer">
        <span className="copyRight">© Hanoi free private tour guide 2015</span>
      </div>
    );
  };

Footer.propTypes = {
  optionalNumber: PropTypes.number
};

export default Footer;
