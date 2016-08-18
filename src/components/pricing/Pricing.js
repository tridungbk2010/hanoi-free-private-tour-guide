/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {Component, PropTypes} from "react";
import PricingItem from "./PricingItem";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as showingPageActions from "../../actions/showingPageActions";
import * as sourceActions from "../../actions/sourceActions";
import  './Pricing.scss';

const DATA = [
  {
    header: "start",
    description: "Recommended for startups with <10 employees",
    modules: [
      {type: "Individual Assessments", content: ["Once a year"]},
      {type: "Company Assessment", content: ["Once a year"]},
      {type: ""},
      {type: ""},
      {type: ""}
    ],
    price: 99
  },
  {
    header: "ACCELERATE",
    description: "Recommended for startups with 10-29 employees",
    modules: [
      {type: "Individual Assessments", content: ["Once a year"]},
      {type: "Company Assessment", content: ["Once a year"]},
      {type: "Predictive Report", content: ["Once a year"]},
      {type: ""},
      {type: "Support & Training", content: ["10 hours of implementation support"]}
    ],
    price: 199
  },
  {
    header: "SCALE",
    description: "Recommended for startups with 30-99 employees",
    modules: [
      {type: "Individual Assessments", content: ["Twice a year"]},
      {type: "Company Assessment", content: ["Twice a year"]},
      {type: "Predictive Report", content: ["Twice a year"]},
      {type: "Custom Assessments", content: ["Division/team level analytics"]},
      {type: "Support & Training", content: ["Support in business hours","Superuser training for HR"]}
    ],
    price: 299
  },
  {
    header: "LEAD",
    description: "Recommended for startups with 100+ employees",
    modules: [
      {type: "Individual Assessments", content: ["Four times a year"]},
      {type: "Company Assessment", content: ["Four times a year"]},
      {type: "Predictive Report", content: ["Four times a year"]},
      {type: "Custom Assessments", content: ["Division/team level analytics", "Custom culture & retention analysis"]},
      {type: "Support & Training", content: ["Support in business hours","Superuser training for HR/managers"]}
    ],
    price: 399
  }
];

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.actions.showLoginPage(true);
    this.props.actions.getSource("Web-pricing");
  }
  render() {
    return (
      <div className="fl-pricing container-fluid">
        <div className="fixWidth">
          <div>
            <h3 className="fl-pricing-title">Pricing</h3>
            {DATA.map((data, index)=> <PricingItem
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
