/**
 * Created by Chris Ho on 6/6/2016.
 */
import React, {Component, PropTypes} from "react";
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
// import RegisterForm from "./RegisterForm";
import MaterialForm from "./BookTourForm";

class HandleRegister extends Component {
  constructor(props, context) {
    super(props, context);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   console.log("handleChange", e.target.value);
  // }

  render() {
    return (
      <div className="handle-book">
        <MaterialForm />
      </div>

    );
  }
}

HandleRegister.PropTypes = {
  myProp: PropTypes.string
};

// function mapStateToProps(state, ownProps) {
//   return {
//     state: state
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(HandleRegister);
export default HandleRegister;
