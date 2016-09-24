/**
 * Created by Chris Ho on 6/7/2016.
 */
import React, {PropTypes, Component} from "react";
import Logo from "../logo/Logo";
import Menu from "../../containers/menu/Menu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as menuActions from '../../actions/menuActions';
// import Icon from "../icon/Icon";
import "./header.scss";
import {scroller} from "react-scroll";
import NetworkIcon from '../../components/common/NetworkIcon';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ''
    };
    this.handleClickLogo = this.handleClickLogo.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleClickLogo() {
    scroller.scrollTo("cover", {
      duration: 1000,
      delay: 0,
      offset: -60,
      smooth: true,
      isDynamic: true
    });
  }

  handleScroll() {
    this.setState({className: window.scrollY >= 60? "small-menu" : ""});
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const newClass = this.state.className ? "flowHeader " + this.state.className : "flowHeader";
    return (
      <div className="wrap-header">
        <nav className={newClass}>
          <div className="leftAction">
            <Logo onClick={this.handleClickLogo}/>
          </div>

          <div className="rightAction">
            <Menu />
            <NetworkIcon size={"small"}/>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  leftSide: PropTypes.array,
  middleSide: PropTypes.element,
  rightSide: PropTypes.array,
  actions:PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(menuActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Header);
//<Button text={"Book Free Tour"}  icon={iconBtnBookTour}/>
//<Logo onClick={this.handleClickLogo}/>
