import React, {PropTypes, Component} from "react";
import Cover from "./cover/Cover";
import BoxIntro from "./box-intro/BoxIntro";
import Features from "./features/Features";
import TeamMember from "../containers/team-member/TeamMember";
import Pricing from "../components/pricing/Pricing";
import Contact from "../components/contact/Contact";
import Footer from "../components/common/Footer";
import Login from "../containers/login/Login";
import Register from "../containers/register/Register";
import RequestSuccess from "../containers/register/RequestSuccess";
import {connect} from "react-redux";
import {Element, scroller} from "react-scroll";
// import {browserHistory} from "react-router";
// import {Link} from "react-router";


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.menu !== this.props.menu) {
      scroller.scrollTo(newProps.menu, {
        duration: 1000,
        delay: 0,
        offset: -60,
        smooth: true,
        isDynamic: true
      })
    }
  }

  render() {
    return (
      <div className="homePage">
        {this.props.showLoginPage &&  <Login />}
        {this.props.showRegisterPage &&  <Register />}
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

        <Element name="Team" hash="Team" className="element">
          <div className="bodyContent">
            <TeamMember />
          </div>
        </Element>

        <Element name="Pricing" hash="Pricing" className="element">
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
  target: PropTypes.string,
  menu: PropTypes.string,
  showLoginPage: PropTypes.bool,
  showRegisterPage: PropTypes.bool,
  showSuccessPage: PropTypes.bool
};

function mapStateToProps(state) {
  console.log("[HOME]_mapStateToProps", state.showingRequestSuccessReducer);
  return {
    menu: state.scrollToDivReducer,
    showLoginPage: state.showingPageReducer,
    showRegisterPage:state.showRegisterPageReducer,
    showSuccessPage:state.showingRequestSuccessReducer
  }
}

export default connect(mapStateToProps, null)(HomePage);
