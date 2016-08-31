/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {PropTypes} from "react";
import "./BoxIntroItem.scss";

const BoxIntroItem = (props) => {
  const styleDiv = {
    color: props.textColor && props.textColor
  };
  return (
    <div className="fl-box-intro-items col-sm-4 col-md-4 col-xs-12">
      <div className="row">
        <div className="fl-box-intro-icon">
          {props.icon}
        </div>
        <div className="fl-box-intro-headline" style={styleDiv}>
          {props.headline}
        </div>
        <p className="fl-box-intro-content" style={styleDiv}>
          {props.content}
        </p>
      </div>
    </div>

  );
};

BoxIntroItem.propTypes = {
  icon: PropTypes.element,
  headline: PropTypes.string,
  content: PropTypes.string,
  textColor: PropTypes.string
};

export default BoxIntroItem;
