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
import * as showingPageActions from "../../actions/showingPageActions";
import NetworkIcon from "../../components/common/NetworkIcon";
import {browserHistory} from "react-router";
import {scroller} from "react-scroll";
import "./Menu.scss";

const MENU_DATA = [
  {name: 'Features', id: 1},
  {name: 'Team', id: 2},
  {name: 'Pricing', id: 3},
  {name: 'Contact', id: 4},
  {name: 'Login', id: 5},
  {name: 'Blog', id: 6}
];
const enhanceWithClickOutside = require('react-click-outside');
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      targetDiv: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleOverlay = this.handleOverlay.bind(this);
  }

  handleScroll(menuName) {
    browserHistory.push("/");
    this.props.actions.clickMenu();
    scroller.scrollTo(menuName, {
      duration: 1000,
      delay: 0,
      offset: -60,
      smooth: true,
      isDynamic: true
    });
    this.setState({
      isShowing: !this.state.isShowing
    });
  }

  handleClick() {
    this.setState({
      isShowing: !this.state.isShowing
    });
  }

  handleClickPopUp(menuName) {
    menuName === "Login" && this.props.actions.showLoginPage(true);
    menuName === "Blog" && window.open("http://52.220.33.209/");
    this.setState({
      isShowing: false
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
    const urlIconMenu = require("../../images/icon-menu.svg");
    const urlIconExit = require("../../images/icon-exit.svg");
    const menuIcon = <img src={urlIconMenu}/>;
    const closeMenuIcon = <img src={urlIconExit}/>;
    const listMenuClassName = this.state.isShowing ? "listMenu showMenu " : "listMenu";
    return (
      <div className="flMenu">
        <Icon icon={this.state.isShowing ? closeMenuIcon : menuIcon} text={"MENU"} onClick={this.handleClick}/>
        <div className={listMenuClassName}>
          <ul className="ulListMenu">
            {MENU_DATA.map((menu, index) => (menu.name !== "Blog" && menu.name !== "Login" )
              ?<MenuItem key={index} onClick={this.handleScroll.bind(this, menu.name)} text={menu.name}/>
              : <MenuItem key={index} onClick={this.handleClickPopUp.bind(this, menu.name)} text={menu.name}/>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, showingPageActions, menuActions), dispatch)
  }
}

export default connect(null, mapDispatchToProps)(enhanceWithClickOutside(Menu));
