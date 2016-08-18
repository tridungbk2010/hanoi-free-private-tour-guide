/**
 * Created by Chris Ho on 8/1/2016.
 */
import React, {PropTypes} from "react";
import "./Icon.scss";

const Icon = (props) => {
  return (
    <div className="flowIcon" onClick={props.onClick}>
      {
        (props.posIcon === "right") ? <div>
          <span className="flIconText">{props.text}</span>
          {props.icon}
        </div> :
          <div>
            {props.icon}
            <span className="flIconText">{props.text}</span>
          </div>
      }
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  onClick: PropTypes.func,
  posIcon: PropTypes.oneOf(["left", "right"])
};
export default Icon;
