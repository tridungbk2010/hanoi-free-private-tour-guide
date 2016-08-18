/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import FeatureItem from '../../components/features/FeatureItem';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as showingPageActions from "../../actions/showingPageActions";
import * as sourceActions from "../../actions/sourceActions";
import './Features.scss';

const DATE_FEATURES = [
  {
    urlImg: require("../../images/flow-chart1.svg"),
    headline: "Proprietary psychological tests",
    content: "FLOW is powered by two proprietary psychological tests, " +
    "the FLOW Motivator Survey and the FLOW Engagement Survey. " +
    "Both tests were developed by a team of workplace psychologists and " +
    "statisticians in a rigorous, scientific process. " +
    "The FLOW Motivator Survey measures people's intrinsic motivators, " +
    "while the FLOW Engagement Survey measures the extent to which " +
    "these motivators can be realized in people's work environments."
  },
  {
    urlImg: require("../../images/flow-chart2.svg"),
    headline: "Benchmarked, actionable reports",
    content: "FLOW gives you access to both individual and company-level reports. " +
    "Reports are highly actionable, with specific, prioritized recommendations " +
    "for follow-up measures that help you make the most of your engagement initiatives. " +
    "In addition, all of the data in the reports is standardized and benchmarked, " +
    "so you can see how your company compares to other employers."
  },
  {
    urlImg: require("../../images/flow-chart3.svg"),
    headline: "Predictive analytics",
    content: "FLOW's predictive algorithms will help you to objectively and analytically " +
    "assess culture fit in your hiring process, to identify the measures that will " +
    "most effectively improve employee engagement, and to forecast and prevent unwanted turnover."
  }
];

class Features extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.actions.showRegisterPage(true);
    this.props.actions.getSource("Web-features");
  }

  render() {
    return (
      <div className="fl-features container-fluid">
        <h4 className="fl-headline-h4">FEATURES</h4>
        {DATE_FEATURES.map((data, id) => <FeatureItem
          key ={id}
          onClick={this.handleClick}
          index={DATE_FEATURES.indexOf(data)}
          urlImg={data.urlImg}
          headline={data.headline}
          content={data.content}/>)}
      </div>
    );
  }
}

Features.propTypes = {
  actions:PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},sourceActions,showingPageActions), dispatch)
  };
}
export default connect(null, mapDispatchToProps)(Features);
