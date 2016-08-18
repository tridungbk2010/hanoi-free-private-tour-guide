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
    // const urlFacebook = require("../../images/icon-facebook.svg");
    // const urlTwitter = require("../../images/icon-twitter.svg");
    // const urlLinkedIn = require("../../images/icon-linkedin.svg");
    // const urlInstagram = require("../../images/icon_insta_large.svg");
    //
    // const urlFacebookHover = require("../../images/icon-facebook-hover.svg");
    // const urlTwitterHover = require("../../images/icon-twitter-hover.svg");
    // const urlLinkedInHover = require("../../images/icon-linkedin-hover.svg");
    // const urlInstagramHover = require("../../images/icon_insta_large_hover.svg");
    //
    // const urlLinkedInSmall = require("../../images/icon-linked-in-small.svg");
    // const urlFacebookSmall = require("../../images/icon-facebook-small.svg");
    // const urlTwitterSmall = require("../../images/icon-twitter-small.svg");
    // const urlInstagramSmall = require("../../images/icon-instagram-small.svg");

    const classSize = this.props.size === "small" ? "fa-lg" : "fa-2x";
    const hoverOnItemClass = this.props.size === "small" ? "fl-social-small-icon" : "fl-social-medium-icon";
    return (
      <div className="fl-network-icon">
        <a onClick={this.clickItem.bind(this, urlSocial.TWITTER_URL)}>
          <i className={"fa fa-twitter-square " + classSize + " " + hoverOnItemClass} aria-hidden="true"/>
        </a>
        <a onClick={this.clickItem.bind(this, urlSocial.FACEBOOK_URL)}>
          <i className={"fa fa-facebook-square " + classSize + " " + hoverOnItemClass} aria-hidden="true"/>
        </a>
        <a onClick={this.clickItem.bind(this, urlSocial.LINKED_IN_URL)}>
          <i className={"fa fa-linkedin-square " + classSize + " " + hoverOnItemClass} aria-hidden="true"/>
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
