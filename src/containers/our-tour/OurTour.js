/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import OurTourItem from "./OurTourItem";
import {DATA_TOUR} from '../../constants/dataConst';
import "./OurTour.scss";

class OurTour extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fl-team-member bodyContent container-fluid">
        <h4 className="fl-team-member-title row">OUR TOUR</h4>
        <div className="fl-team-member-data row">
          {
            DATA_TOUR.map((tour, index) =>
              <OurTourItem
                key={index}
                avatarUrl={tour.url}
                tourName={tour.name}
                description={tour.description}
                time={tour.time}
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
