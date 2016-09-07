/**
 * Created by Chris Ho on 8/1/2016.
 */
import React, {Component, PropTypes} from "react";
import Overlay from "../../components/common/Overlay";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as menuActions from "../../actions/menuActions";
import {scroller} from "react-scroll";
import "./Menu.scss";
// import MenuItem from "./MenuItem";
// import NetworkIcon from "../../components/common/NetworkIcon";
const enhanceWithClickOutside = require('react-click-outside');

class Menu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isShowing: false,
      targetDiv: '',
      className: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleOverlay = this.handleOverlay.bind(this);
    this.handleClickMennu = this.handleClickMennu.bind(this);

  }

  handleClickMennu(menuName) {
    scroller.scrollTo(menuName, {
      duration: 1000,
      delay: 0,
      offset: -60,
      smooth: true,
      isDynamic: true
    });
    this.setState({
      isShowing: false
    });
  }



  handleClick() {
    this.setState({
      isShowing: !this.state.isShowing
    });
  }

  handleOverlay() {
    this.setState({
      isShowing: false
    });
  }

  handleClickOutside() {
    this.setState({
      isShowing: false
    });
  }

  render() {
    // const menuIcon = <i className="fa fa-bars fa-2x" aria-hidden="true" />;
    // const closeMenuIcon = <i className="fa fa-times fa-2x" aria-hidden="true" />;
    // const listMenuClassName = this.state.isShowing ? "listMenu showMenu " : "listMenu";
    return (
      <div className="flMenu" id="home">
        <div className="listMenu">
          <ul className="ulListMenu">
            <li onClick={() => this.handleClickMennu("comment")} className="menuItem">Comment</li>
            <li onClick={() => this.handleClickMennu("features")} className="menuItem">About</li>
            <li onClick={() => this.handleClickMennu("ourTour")} className="menuItem">Tours</li>
            <li onClick={() => this.handleClickMennu("contact")} className="menuItem">Contacs</li>
          </ul>
        </div>
        {this.state.isShowing && <Overlay onClick={this.handleOverlay}/>}
      </div>

    );
  }
}

Menu.propTypes = {
  actions: PropTypes.object
};

Menu.contextTypes = {
  router: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(menuActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(enhanceWithClickOutside(Menu));

//<Icon icon={this.state.isShowing ? closeMenuIcon : menuIcon} text={"MENU"} onClick={this.handleClick}/>
//<div className="menu-social-icon">
//<NetworkIcon size={"small"}/>
//</div>
//<li onClick={() => this.handleClickMennu("blog")} className="menuItem">Blog</li>
