/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import BoxIntroItem from "./BoxIntroItem";
import './BoxIntro.scss'

const INTRO_DATA = [
  {
    icon: <i className="fa fa-users fa-3x" aria-hidden="true" style={{color:'#ed1064'}}/>,
    headLine: "200+ Members",
    content: "200 members are always ready to pick up guests."
  },
  {
    icon: <i className="fa fa-comments fa-3x" aria-hidden="true" style={{color:'#f7931d'}}/>,
    headLine: "300+ Tours have been taken",
    content: "We are heading to 1000 tours within 2016."
  },
  {
    icon: <i className="fa fa-flag fa-3x" aria-hidden="true" style={{color:'#38b449'}}/>,
    headLine: "40+ Nations",
    content: "40+ nations are where our guests come from. "
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
