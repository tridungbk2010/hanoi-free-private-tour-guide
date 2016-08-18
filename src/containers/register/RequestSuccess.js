/**
 * Created by Chris Ho on 8/14/2016.
 */
import React, {Component, PropTypes} from "react";
import Button from "../../components/button/Button";
import NetworkIcon from "../../components/common/NetworkIcon";
import Layout from "../../components/layout/Layout";
import './RequestSuccess.scss';

class RequestSuccess extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    window.open("http://52.220.33.209/");
  }

  render() {
    return (
        <Layout
          children={
            <div className="fl-layout-request-success">
              <p className="fl-register-title">Thank you for your request!</p>
              <p className="fl-rqss-text-block">
                Your demo request has been sent to our team.
                Please sit tight, and one of our consultants will be in contact within 24-48 hours.
              </p>
              <div className="fl-rqss-action">
                <span>In the meantime, why not</span>
                <div className="fl-rqss-btn-blog">
                  <Button autoWidth={true} text={"CHECK OUT OUR BLOG"} onClick={this.handleClick}/>
                </div>
                <div className="rqss-group-social">
                  <p>And follow us on Social Media</p>
                  <NetworkIcon color={"red"} size={"medium"}/>
                </div>
              </div>
            </div>
          }
        />
    );
  }
}

RequestSuccess.propTypes = {
  optionalNumber: PropTypes.number
};

export default RequestSuccess;
