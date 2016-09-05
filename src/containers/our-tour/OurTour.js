/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import OurTourItem from "./OurTourItem";
import './OurTour.scss';

class OurTour extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="fl-team-member bodyContent container-fluid">
        <h4 className="fl-team-member-title row">OUR TOUR</h4>
        <div className="fl-team-member-data row">
        {
          DATA_TEAM_MEMBER.map((data, id) =>
            <OurTourItem
              key = {id}
              avatarUrl={data.url}
              tourName={data.tourName}
              description={data.description}
              time={data.time}
            />
          )
        }
        </div>
      </div>
    );
  }
}

OurTour.propTypes = {
  optionalNumber: PropTypes.number
};

export default OurTour;

const DATA_TEAM_MEMBER = [
  {
    url: require("../../images/tg5.jpg"),
    tourName: "Hanoi Old Quarter walking Tour",
    time:"Half day - 3h",
    description: "Hi! I am Eva. Welcome to my personal blog. I enjoy Freedom and like to blog about anything " +
    "that comes to my free mind. On morning, I may be blogging about nature, " +
    "adventure, games etc., while in the evening you may find be blogging " +
    "about sci-fi technology, music, food etc."
  },
  {
    url: require("../../images/tourguide 2.jpg"),
    tourName: "French Quarter walking Tour",
    time:"Half day - 3h",
    description: "Hi! I am Eva. Welcome to my personal blog. I enjoy Freedom and like to blog about anything " +
    "that comes to my free mind. On morning, I may be blogging about nature, " +
    "adventure, games etc., while in the evening you may find be blogging " +
    "about sci-fi technology, music, food etc."
  },
  {
    url: require("../../images/13640902_407113789459193_1987375879700641696_o.jpg"),
    tourName: "Hanoi war sites walking Tour",
    time:"Half day - 3h",
    description: "Hi! I am Eva. Welcome to my personal blog. I enjoy Freedom and like to blog about anything " +
    "that comes to my free mind. On morning, I may be blogging about nature, " +
    "adventure, games etc., while in the evening you may find be blogging " +
    "about sci-fi technology, music, food etc."
  },
  {
    url: require("../../images/tg6.jpg"),
    tourName: "Hanoi free city Tour",
    time:"Full day",
    description: "Hi! I am Eva. Welcome to my personal blog. I enjoy Freedom and like to blog about anything " +
    "that comes to my free mind. On morning, I may be blogging about nature, " +
    "adventure, games etc., while in the evening you may find be blogging " +
    "about sci-fi technology, music, food etc."
  },
  {
    url: require("../../images/tg5.jpg"),
    tourName: "Hanoi street food Tour experience",
    time:"3h",
    description: "Hi! I am Eva. Welcome to my personal blog. I enjoy Freedom and like to blog about anything " +
    "that comes to my free mind. On morning, I may be blogging about nature, " +
    "adventure, games etc., while in the evening you may find be blogging " +
    "about sci-fi technology, music, food etc."
  },
  {
    url: require("../../images/tg4.jpg"),
    tourName: "Hanoi museum Tour",
    time:"Half day - 3h",
    description: "Hi! I am Eva. Welcome to my personal blog. I enjoy Freedom and like to blog about anything " +
    "that comes to my free mind. On morning, I may be blogging about nature, " +
    "adventure, games etc., while in the evening you may find be blogging " +
    "about sci-fi technology, music, food etc."
  }
];
