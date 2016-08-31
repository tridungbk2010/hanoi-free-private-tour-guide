/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from 'react';
import './Overlay.scss';

class Overlay extends Component {
  render() {
    const {onClick, children} = this.props;
    return (
      <div className="overlay-layout" onClick={onClick}>
        <div className="children-in-layout">
          {children}
        </div>
      </div>
    );
  }
}

Overlay.propTypes = {
  onClick: PropTypes.func,
  children:PropTypes.element
};

export default Overlay;
