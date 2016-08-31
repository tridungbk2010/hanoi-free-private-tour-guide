/**
 * Created by Chris Ho on 8/21/2016.
 */
import React, {Component, PropTypes} from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About us</h1>
      </div>
    );
  }
}

About.propTypes = {
  optionalNumber: PropTypes.number
};

export default About;
