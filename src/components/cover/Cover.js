/**
 * Created by Chris Ho on 8/1/2016.
 */
import React, {Component, PropTypes} from "react";
import ManageRequest from "../../containers/register/ManageRequest";
import Title from "../common/Title";
import "./Cover.scss";

class Cover extends Component {
  render() {
    return (
      <section className="flCover">
        <div className="subscribeForm">
          <div className="fl-cover-title-form">
            <Title content={"Assessments that boost employee engagement, scientifically"}
                   color={"#fff"}
                   fontWeight={true}
                   size={"medium"}
            />
          </div>
          <p className="fl-form-subscribe-desc">{"Unlock your team's full potential with FLOW's proprietary psychological tests and predictive algorithms"}</p>
          <ManageRequest source="Web-top" />
        </div>
      </section>
    );
  }
}

Cover.propTypes = {
  test:PropTypes.string
};

export default Cover;
