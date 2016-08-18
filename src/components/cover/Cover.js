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
            <Title content={"An HR analytics tool to screen, engage and retain top talent, scientifically"}
                   color={"#fff"}
                   fontWeight={true}
                   size={"medium"}
            />
          </div>
          <p className="fl-form-subscribe-desc">{"See how FLOW can save you millions of dollars by helping you focus " +
          "on HR metrics that matter"}</p>
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
