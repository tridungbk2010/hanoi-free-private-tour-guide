/**
 * Created by Chris Ho on 8/1/2016.
 */
import React, {PropTypes} from "react";
import "./Button.scss";

const Button = (props)=> {
  const styleButton = {
    width: props.autoWidth ? "100%" : props.width,
    backgroundColor: props.bgColor && props.bgColor,
    padding: "0 15px"
  };
  return (
    <span className="flow-btn" style={styleButton} onClick={props.onClick}>
      {props.text}
      {props.icon && <span className="fl-icon-in-btn">{props.icon}</span>}
      </span>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  autoWidth: PropTypes.bool,
  width: PropTypes.number,
  bgColor: PropTypes.string,
  icon: PropTypes.element,
  iconPos: PropTypes.oneOf(['left', 'right'])
};

export default Button;
