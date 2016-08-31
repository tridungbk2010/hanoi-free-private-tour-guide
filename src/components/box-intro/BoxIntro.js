/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import BoxIntroItem from "./BoxIntroItem";
import './BoxIntro.scss'

const INTRO_DATA = [
  {
    icon: <span className="number-circle">200+</span>,
    headLine: "Members",
    content: "200 members are always ready to pick up guests."
  },
  {
    icon: <span className="number-circle">300+</span>,
    headLine: "300+ Tours have been taken",
    content: "We are heading to 1000 tours within 2016."
  },
  {
    icon: <span className="number-circle">40+</span>,
    headLine: "40+ Nations",
    content: "40+ nations are where our guests come from. "
  }
];

class BoxIntro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {textColor} = this.props;
    return (
      <div className="fl-box-intro container-fluid">
        {
          INTRO_DATA.map((data, id) =>
            <BoxIntroItem
              textColor={textColor}
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
  textColor: PropTypes.string
};

export default BoxIntro;
