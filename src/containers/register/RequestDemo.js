/**
 * Created by Chris Ho on 8/8/2016.
 */
import React, {Component, PropTypes} from "react";
import Layout from "../../components/layout/Layout";
import ManageRequest from "./ManageRequest";
import {connect} from 'react-redux';
import "./RequestDemo.scss";

class Register extends Component {
  render() {
    return (
      <Layout children={
        <div className="fl-request-demo">
          <div className="fl-request-demo-title">Thank you for your interest!</div>
          <p className="fl-request-demo-description">
            FLOW will become available later this year, but we would be delighted to give you a
            sneak preview of its powerful features. To request a demo, please fill in your details below.
          </p>
          <ManageRequest source={this.props.source}/>
        </div>
      }
      />
    );
  }
}

Register.propTypes = {
  source: PropTypes.string
};

function mapStateToProps(state) {
  return {
    source:state.sourceReducer
  }
}

export default connect(mapStateToProps, null)(Register);
