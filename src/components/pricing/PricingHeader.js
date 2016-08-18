/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {PropTypes} from "react";

const PricingHeader = (props)=> {
  const styleDiv = {
    backgroundColor: "#000",
    borderRadius: "4px 4px 0 0",
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    lineHeight:"40px",
    height:40,
    fontWeight:700,
    textTransform: 'uppercase'

  };
  return (
    <div className="fl-pricing-header" style={styleDiv}>
      {props.text}
    </div>
  );
};

PricingHeader.propTypes = {
  text: PropTypes.string
};

export default PricingHeader;
