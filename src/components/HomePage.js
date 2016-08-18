import React, {PropTypes, Component} from "react";
import Cover from "./cover/Cover";
import BoxIntro from "./box-intro/BoxIntro";
import Features from "./features/Features";
import TeamMember from "../containers/team-member/TeamMember";
import Pricing from "../components/pricing/Pricing";
import Contact from "../components/contact/Contact";
import Footer from "../components/common/Footer";
import Login from "../containers/login/Login";
import Register from "../containers/register/RequestDemo";
import RequestSuccess from "../containers/register/RequestSuccess";
import {connect} from "react-redux";
import {Element} from "react-scroll";
// import {browserHistory} from "react-router";
// import {Link} from "react-router";


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homePage">
        {this.props.showLoginPage &&  <Login />}
        {this.props.showRequestDemoPage &&  <Register />}
        {this.props.showSuccessPage &&  <RequestSuccess />}
        <Cover />
        <div className="bodyContent">
          <BoxIntro />
        </div>

        <Element name="Features" className="element">
          <div className="bodyContent">
            <Features />
          </div>
        </Element>

        <Element name="Team" className="element">
          <div className="bodyContent">
            <TeamMember />
          </div>
        </Element>

        <Element name="Pricing" className="element">
          <Pricing />
        </Element>

        <Element name="Contact" className="element">
          <div className="bodyContent">
            <Contact />
          </div>
        </Element>
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  showLoginPage: PropTypes.bool,
  showRequestDemoPage: PropTypes.bool,
  showSuccessPage: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    showLoginPage: state.showingPageReducer,
    showRequestDemoPage:state.showRequestDemoReducer,
    showSuccessPage:state.showingRequestSuccessReducer
  };
}

export default connect(mapStateToProps, null)(HomePage);
