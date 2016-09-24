import React, {PropTypes, Component} from "react";
import Cover from "./cover/Cover";
import CommentList from "../containers/comments/CommentList";
import Features from "./features/Features";
import OurTour from "../containers/our-tour/OurTour";
import Contact from "../components/contact/Contact";
import Footer from "../components/common/Footer";
import BookTourForm from '../containers/tourist/BookTourForm';
import Layout from '../components/layout/Layout';
import {connect} from 'react-redux';
// import {Link} from "react-router";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homePage">
        {this.props.overlayTour.show && <Layout children={<BookTourForm />}/>}
        <Cover />
        <div className="bodyContent" id="comment">
          <CommentList />
        </div>

        <div className="bodyContent" id="features">
          <Features />
        </div>

        <div id="ourTour">
          <OurTour />
        </div>
        <div className="bodyContent" id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  menu: PropTypes.string,
  overlayTour:PropTypes.object
};

function mapStateToProps(state) {
  return {
    overlayTour: state.overlayReducer
  }
}

export default connect(mapStateToProps, null)(HomePage);
