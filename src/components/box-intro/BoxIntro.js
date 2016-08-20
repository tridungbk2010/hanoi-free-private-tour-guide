/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import BoxIntroItem from "./BoxIntroItem";
import './BoxIntro.scss'

const iconScreen = require("../../images/icon-srceen.svg");
const iconChart = require("../../images/icon-chart.svg");
const iconSwim = require("../../images/icon-swim.svg");
const INTRO_DATA = [
  {
    icon: (<img src={iconScreen} />),
    headLine: "SCREEN FOR CULTURE FIT",
    content: "Startups need people who will walk the extra mile every day to make the company a success. " +
    "FLOW helps you identify the candidates who are most likely to thrive in and enrich your culture."
  },
  {
    icon: (<img src={iconChart} />),
    headLine: "IMPROVE ENGAGEMENT",
    content: "FLOW is the only tool that measures both your people's motivators and their engagement. " +
    "This way you can focus on the metrics that matter, " +
    "meaningfully improving engagement without wasting valuable resources."
  },
  {
    icon: (<img src={iconSwim} />),
    headLine: "PREVENT UNWANTED TURNOVER",
    content: "Retaining your best people is the key to creating a scalable culture. " +
    "FLOW's predictive algorithms help you forecast attrition risk and identify " +
    "the most effective preventive measures. "
  }
];

class BoxIntro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fl-box-intro container-fluid">
        {
          INTRO_DATA.map((data, id) =>
            <BoxIntroItem
              key={id}
              icon={data.icon}
              headline={data.headLine}
              content={data.content}
            />
          )
        }
      </div>
    );
  }
}

BoxIntro.propTypes = {
  optionalNumber: PropTypes.number
};

export default BoxIntro;
