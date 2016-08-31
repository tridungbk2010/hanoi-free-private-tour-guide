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
import Button from '../../components/button/Button';
import "./header.scss";
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClickLogo = this.handleClickLogo.bind(this);
  }

  handleClickLogo() {
    this.props.actions.clickMenu("");
    browserHistory.push("/");
    let posX = window.pageXOffset;
    let posY = window.pageYOffset;
    let incrementer = 8;
    const backHome = setInterval(frame, 8);

    function frame() {
      if (posY <= 0) {
        clearInterval(backHome);
      } else {
        incrementer += 1;
        posY -= Math.pow(1.05, incrementer);
        window.scrollTo(posX, posY);
      }
    }
  }

  render() {
    const iconBtnBookTour = <i className="fa fa-arrow-circle-right" aria-hidden="true" />;
    return (
      <nav className="container-fluid flowHeader">
        <div className="col-xs-4 col-sm-4 leftAction">
          <Menu />
        </div>
        <div className="col-xs-4 col-sm-4 middle-action">
          <Logo onClick={this.handleClickLogo}/>
        </div>
        <div className="col-xs-4 col-sm-4 rightAction">
          <Link to={"book-tour"}><Button text={"Book Free Tour"}  icon={iconBtnBookTour}/></Link>
        </div>
      </nav>
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
