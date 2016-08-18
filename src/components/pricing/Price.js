/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {PropTypes} from 'react';

const Price =(props)=> {
  const styleDiv = {
    fontWeight:"bold",
    fontSize:14,
    display:'inline-block'
  };
    return (
      <span className="fl-price" style={styleDiv}>
        {"$" + props.price + "/person/year"}
      </span>
    );
  };

Price.propTypes = {
  price: PropTypes.number
};

export default Price;
