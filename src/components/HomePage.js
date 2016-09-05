import React, {PropTypes, Component} from "react";
import Cover from "./cover/Cover";
import CommentList from "../containers/comments/CommentList";
import Features from "./features/Features";
import OurTour from "../containers/our-tour/OurTour";
import Contact from "../components/contact/Contact";
import Footer from "../components/common/Footer";
// import {Link} from "react-router";


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homePage">
        <Cover />
        <div className="bodyContent">
          <CommentList />
        </div>

        <div className="bodyContent" id="Features">
          <Features />
        </div>

        <div id="ourTour">
          <OurTour />
        </div>


        <div className="bodyContent" id="Contact">
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  menu: PropTypes.string
};


export default HomePage;
