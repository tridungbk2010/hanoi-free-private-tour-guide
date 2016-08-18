/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import BoxIntroItem from "./BoxIntroItem";
import './BoxIntro.scss'
import {INTRO_DATA} from '../../constants/dataConst';

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
