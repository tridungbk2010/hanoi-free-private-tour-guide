/**
 * Created by Chris Ho on 8/8/2016.
 */
import React, {Component, PropTypes} from "react";
import "./Layout.scss";

class Layout extends Component {
  render() {
    return (
      <div className="fl-layout">
        <div className="fl-layout-wrap-form" >
          {this.props.children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element,
  width:PropTypes.number
};

export default Layout;
