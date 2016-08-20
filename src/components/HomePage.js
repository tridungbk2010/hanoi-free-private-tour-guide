import React, {PropTypes, Component} from "react";
import Cover from "./cover/Cover";
import BoxIntro from "./box-intro/BoxIntro";
import Features from "./features/Features";
import TeamMember from "../containers/team-member/TeamMember";
import Pricing from "../components/pricing/Pricing";
import Contact from "../components/contact/Contact";
import Footer from "../components/common/Footer";
import {connect} from "react-redux";
import {Element, scroller} from "react-scroll";
// import {Link} from "react-router";


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.menu !== this.props.menu) && nextProps.menu !== "") {
      scroller.scrollTo(nextProps.menu, {
        duration: 1000,
        delay: 0,
        offset: -60,
        smooth: true,
        isDynamic: true
      });
    }
  }

  componentDidMount() {
    this.props.menu && scroller.scrollTo(this.props.menu, {
      duration: 1000,
      delay: 0,
      offset: -60,
      smooth: true
    });
  }

  render() {
    return (
      <div className="homePage">
        <Cover />
        <div className="bodyContent">
          <BoxIntro />
        </div>

        <Element name="Features" className="element">
          <div className="bodyContent" id="Features">
            <Features />
          </div>
        </Element>

        <Element name="Team" className="element">
          <div className="bodyContent" id="Team">
            <TeamMember />
          </div>
        </Element>

        <Element name="Pricing" className="element">
          <div id="Pricing">
            <Pricing />
          </div>
        </Element>

        <Element name="Contact" className="element">
          <div className="bodyContent" id="Contact">
            <Contact />
          </div>
        </Element>
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  menu: PropTypes.string
};

function mapStateToProps(state) {
  return {
    menu: state.menuReducer
  };
}

export default connect(mapStateToProps, null)(HomePage);
