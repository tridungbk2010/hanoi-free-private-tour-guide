/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from 'react';
import './Overlay.scss';

class Overlay extends Component {
  render() {
    return (
      <div className="flOverlay" onClick={this.props.onClick}>

      </div>
    );
  }
}

Overlay.propTypes = {
  onClick: PropTypes.func
};

export default Overlay;
