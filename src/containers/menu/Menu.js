/**
 * Created by Chris Ho on 8/1/2016.
 */
import React, {Component, PropTypes} from "react";
import Icon from "../../components/icon/Icon";
import MenuItem from "./MenuItem";
import Overlay from "../../components/common/Overlay";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as menuActions from "../../actions/menuActions";
import NetworkIcon from "../../components/common/NetworkIcon";
import {browserHistory} from "react-router";
// import {scroller} from "react-scroll";
import "./Menu.scss";
const enhanceWithClickOutside = require('react-click-outside');

const MENU_DATA = [
  {name: 'Features', id: 1},
  {name: 'Team', id: 2},
  {name: 'Pricing', id: 3},
  {name: 'Contact', id: 4},
  {name: 'Login', id: 5},
  {name: 'Blog', id: 6}
];

class Menu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isShowing: false,
      targetDiv: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleOverlay = this.handleOverlay.bind(this);
  }

  handleScroll(menuName) {
    //window.location.hash = menuName;
    // browserHistory.push("#" + menuName);
    this.context.router.push('#'+menuName);
    this.setState({
      isShowing: !this.state.isShowing
    });
    switch (menuName) {
      case "Login":
        return browserHistory.push("login");
      case "Blog":
        return window.open("http://52.220.33.209/");
      default:
        return this.props.actions.clickMenu(menuName);
    }
  }

  handleClick() {
    this.setState({
      isShowing: !this.state.isShowing
    });
  }

  // handleClickPopUp(menuName) {
  //   if(menuName === "Login"){
  //     browserHistory("/login");
  //   }else{
  //     window.open("http://52.220.33.209/")
  //   }
  //   this.setState({
  //     isShowing: false
  //   });
  // }

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
    const menuIcon = <i className="fa fa-bars fa-2x" aria-hidden="true" />;
    const closeMenuIcon = <i className="fa fa-times fa-2x" aria-hidden="true" />;
    const listMenuClassName = this.state.isShowing ? "listMenu showMenu " : "listMenu";
    return (
      <div className="flMenu">
        <Icon icon={this.state.isShowing ? closeMenuIcon : menuIcon} text={"MENU"} onClick={this.handleClick}/>
        <div className={listMenuClassName}>
          <ul className="ulListMenu">
            {MENU_DATA.map((menu, index) =>
              <MenuItem key={index} onClick={this.handleScroll.bind(this, menu.name)} text={menu.name}/>
            )}
          </ul>
          <div className="menu-social-icon">
            <NetworkIcon size={"small"}/>
          </div>
        </div>

        {this.state.isShowing && <Overlay onClick={this.handleOverlay}/>}
      </div>

    );
  }
}
// var keys = {37: 1, 38: 1, 39: 1, 40: 1};
//
// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault)
//     e.preventDefault();
//   e.returnValue = false;
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

// function disableScroll() {
//   if (window.addEventListener) // older FF
//     window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove = preventDefault; // mobile
//   document.onkeydown = preventDefaultForScrollKeys;
// }
//
// function enableScroll() {
//   if (window.removeEventListener)
//     window.removeEventListener('DOMMouseScroll', preventDefault, false);
//   window.onmousewheel = document.onmousewheel = null;
//   window.onwheel = null;
//   window.ontouchmove = null;
//   document.onkeydown = null;
// }


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
