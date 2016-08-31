/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {Component, PropTypes} from "react";
import "./NetworkIcon.scss";
import * as urlSocial from '../../constants/urlConst';

class NetworkIcon extends Component {

clickItem(url){
  window.open(url);
}
  render() {
    const classSize = this.props.size === "small" ? "fa-lg" : "fa-2x";
    const hoverOnItemClass = this.props.size === "small" ? "fl-social-small-icon" : "fl-social-medium-icon";
    return (
      <div className="fl-network-icon">
        <a onClick={this.clickItem.bind(this, urlSocial.FACEBOOK_URL)}>
          <i className={"fa fa-facebook-square " + classSize + " " + hoverOnItemClass} aria-hidden="true"/>
        </a>
        <a onClick={this.clickItem.bind(this, urlSocial.INSTAGRAM_URL)}>
          <i className={"fa fa-instagram " + classSize + " " + hoverOnItemClass} aria-hidden="true"/>
        </a>
      </div>
    );
  }
}

NetworkIcon.propTypes = {
  size: PropTypes.oneOf(["small", "medium"])
};

export default NetworkIcon;
