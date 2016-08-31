/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {PropTypes} from "react";
// import Button from "../button/Button";
// import {Link} from "react-router";
import "./FeatureItem.scss";

const FeatureItem = (props) => {
  const texBox = (
    <div className="col-sm-6 col-md-6 col-xs-12">
      <h3 className="fl-feature-headline">
        {props.headline}
      </h3>
      <div className="fl-feature-content">
        {props.content}
      </div>
    </div>
  );

  const imgBox = (
    <div className="fl-feature-img col-sm-6 col-md-6 col-xs-12">
      <img src={props.urlImg}/>
    </div>
  );
  return (
    <div className="fl-feature-item row">
      {getOddorEven(props.index) ? <div>{texBox} {imgBox} </div> : <div>{imgBox}{texBox}</div>}
    </div>
  );
};

FeatureItem.propTypes = {
  index: PropTypes.number,
  urlImg: PropTypes.string,
  headline: PropTypes.string,
  content: PropTypes.string
};

const getOddorEven = (number) => {
  return number % 2 === 0;
};

export default FeatureItem;
