/**
 * Created by Chris Ho on 8/8/2016.
 */
import React, {Component, PropTypes} from "react";
// import Layout from "../../components/layout/Layout";
// import TextInput from "../../components/input-field/TextInput";
// import Button from "../../components/button/Button";
// import {Link} from "react-router";
import HandleRegister from '../../containers/tourist/HandleRegister'
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HandleRegister />
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object
};

export default Login;
