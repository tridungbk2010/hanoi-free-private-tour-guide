/**
 * Created by Chris Ho on 8/1/2016.
 */
import React, {PropTypes} from "react";
import "./Button.scss";

const Button = (props)=> {
  const styleButton = {
    width: props.autoWidth ? "100%" :props.width,
    padding: '0 20px',
    backgroundColor:props.bgColor && props.bgColor
  };
  return (
      <span className="flow-btn" style={styleButton} onClick={props.onClick}>
        {props.text}
      </span>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  autoWidth: PropTypes.bool,
  width:PropTypes.number,
  bgColor:PropTypes.string
};

export default Button;
