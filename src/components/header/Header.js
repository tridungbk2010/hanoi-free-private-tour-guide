/**
 * Created by Chris Ho on 6/7/2016.
 */
import React, {PropTypes, Component} from "react";
import Logo from "../logo/Logo";
import Menu from "../../containers/menu/Menu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as showingPageActions from "../../actions/showingPageActions";
import * as sourceActions from "../../actions/sourceActions";
import Icon from "../icon/Icon";
import "./header.scss";
// import {Link} from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClickLogo = this.handleClickLogo.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.props.actions.showLoginPage(true);
    this.props.actions.getSource("");
  }

  handleClickLogo() {
    this.props.actions.showRequestDemoPage(false);
    this.props.actions.showLoginPage(false);
    let posX = window.pageXOffset;
    let posY = window.pageYOffset;
    let incrementer = .01;
    const backHome = setInterval(frame, 8);

    function frame() {
      if (posY <= 0) {
        clearInterval(backHome);
      } else {
        incrementer += 1;
        posY -= Math.pow(1.2, incrementer);
        window.scrollTo(posX, posY);
      }
    }
  }

  render() {
    const urlIconMenu = require("../../images/fl-icon-login.svg");
    const loginIcon = <img src={urlIconMenu}/>;
    return (
      <nav className="container-fluid flowHeader">
        <div className="col-xs-4 col-sm-4 leftAction">
          <Menu />
        </div>
        <div className="col-xs-4 col-sm-4 flowLogo">
          <Logo onClick={this.handleClickLogo}/>
        </div>
        <div className="col-xs-4 col-sm-4 rightAction">
          <Icon icon={loginIcon} text={"LOG IN"} posIcon={"right"}
                onClick={this.handleLogin}
          />
        </div>
      </nav>
    );
  }
}


Header.propTypes = {
  leftSide: PropTypes.array,
  middleSide: PropTypes.element,
  rightSide: PropTypes.array,
  onClickLogo: PropTypes.func,
  actions:PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},sourceActions, showingPageActions), dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Header);
