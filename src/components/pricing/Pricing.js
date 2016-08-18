/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {Component, PropTypes} from "react";
import PricingItem from "./PricingItem";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as showingPageActions from "../../actions/showingPageActions";
import * as sourceActions from "../../actions/sourceActions";
import {DATA_PRICING} from '../../constants/dataConst';
import  './Pricing.scss';

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.actions.showRequestDemoPage(true);
    this.props.actions.getSource("Web-pricing");
  }
  render() {
    return (
      <div className="fl-pricing container-fluid">
        <div className="fixWidth">
          <div>
            <h3 className="fl-pricing-title">Pricing</h3>
            {DATA_PRICING.map((data, index)=> <PricingItem
              key = {index}
              onClick={this.handleClick}
              header={data.header}
              modules={data.modules}
              price={data.price}
              description={data.description}
              buttonText={"SIGN UP"}/>)}
          </div>
        </div>
      </div>
    );
  }
}

Pricing.propTypes = {
  actions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},sourceActions,showingPageActions), dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Pricing);
