/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {PropTypes} from "react";

const Title = (props)=> {
  const styleDiv = {
    fontSize: props.size === "large" && "48px"
    || props.size === "medium" && "26px"
    || props.size === "small" && "16px",
    color: props.color && props.color,
    lineHeight:'1.3em',
    fontWeight: props.fontWeight && "bold"
  };
  return (
    <div className="fl-comp-title" style={styleDiv}>
      {props.content}
    </div>
  );
};

Title.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small'])
};

export default Title;
