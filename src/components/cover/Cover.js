/**
 * Created by Chris Ho on 8/1/2016.
 */
import React, {Component, PropTypes} from "react";
import Button from "../../components/button/Button";
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
// import BoxIntro from '../../components/box-intro/BoxIntro';
import "./Cover.scss";
// import ManageRequest from "../../containers/register/ManageRequest";
// import Title from "../common/Title";
import {Link} from "react-router";

class Cover extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const iconBtnBookTour = <i className="fa fa-arrow-circle-right" aria-hidden="true"/>;
    return (
      <section className="flCover">
        <div className="cover-intro">
          <div className="fl-cover-title">
            <span className="content-title">Supplying free services for foreign visitors</span>
          </div>
          <p className="fl-form-subscribe-desc">Hanoi Free Private Tour Guide provides (according to the request of the
            tourists, unlimited in styles)</p>
          <Link to={"book-tour"} refresh = {true}> <Button text={"Book Free Tour"} icon={iconBtnBookTour} /></Link>
        </div>
      </section>
    );
  }
}

Cover.propTypes = {
  test: PropTypes.string
};



export default Cover;
