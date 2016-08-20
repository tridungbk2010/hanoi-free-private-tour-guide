/**
 * Created by Chris Ho on 6/7/2016.
 */
import React, {PropTypes} from "react";
import {IndexLink} from "react-router";
import "./logoStyle.scss";

const Logo = (props) => {
  const urlIconLogo = require("../../images/logo-tourguide2.svg");
  return (
    <IndexLink to="/" activeClassName="active">
    <span onClick={props.onClick} className="logoSVG">
      <img src={urlIconLogo}/>
    </span>
    </IndexLink>
  );
};

Logo.propTypes = {
  onClick: PropTypes.func
};

export default Logo;
