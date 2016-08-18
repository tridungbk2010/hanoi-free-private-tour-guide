/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {PropTypes} from "react";
import "./Pricing.scss";

const Module = (props) => {
  return (
    <div className="fl-pricing-modules">
      {props.type ? <div className="mdType">{props.type}</div> : <div className="no-content">N/A</div>}
      {props.content && <div className="mdContent">{
        props.content.map((ct, index) => <span key={index} className="modules-content" >{ct}</span>)
      }
      </div>}
    </div>
  );
};

Module.propTypes = {
  type: PropTypes.string,
  content: PropTypes.array
};

export default Module;
