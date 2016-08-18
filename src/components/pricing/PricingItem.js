/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {PropTypes} from "react";
import Module from "./Module";
import PricingHeader from "./PricingHeader";
import Price from "./Price";
import Button from "../../components/button/Button";
import "./PricingItem.scss";

const PricingItem = (props)=> {
  return (
    <div className="fl-pricing-item col-xs-12 col-sm-6 col-md-3">
      <div >
        <div className="fl-pricing-item-el">
          <div>
            <PricingHeader text={props.header}/>
          </div>
          <div className="fl-pricing-item-des">
            <div className="middle-content">
              {props.description}
            </div>
          </div>
          <div className="fl-module">
            {props.modules && props.modules.map(
              (data, index) => {
                return <Module key={index} type={data.type} content={data.content}/>
              })}
          </div>
          <div>
           <Button autoWidth={true} text={props.buttonText} onClick={props.onClick}/>
          </div>
          <div>
            <Price price={props.price}/>
          </div>
        </div>
      </div>
    </div>
  );
};

PricingItem.propTypes = {
  header: PropTypes.node,
  description: PropTypes.string,
  modules: PropTypes.array,
  buttonText: PropTypes.string,
  price: PropTypes.number,
  onClick:PropTypes.func
};

export default PricingItem;
