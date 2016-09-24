/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {PropTypes} from "react";
import "./FeatureItem.scss";

const FeatureItem = (props) => {
  const indexClass = getOddOrEven(props.index)? "fl-feature-item row even":"fl-feature-item row odd";
  return (
    <div className={indexClass}>
      <div className="col-sm-6 col-md-6 col-xs-12 fl-feature-text-box">
        <h3 className="fl-feature-headline">
          {props.headline}
        </h3>
        <div className="fl-feature-content">
          {props.content}
        </div>
      </div>
      <div className="fl-feature-img col-sm-6 col-md-6 col-xs-12">
        <img src={props.urlImg} alt={props.alt}/>
      </div>
    </div>
  );
};

const getOddOrEven = (number) => {
  return number % 2 === 0;
};

FeatureItem.propTypes = {
  index: PropTypes.number,
  urlImg: PropTypes.string,
  headline: PropTypes.string,
  content: PropTypes.string
};

export default FeatureItem;
