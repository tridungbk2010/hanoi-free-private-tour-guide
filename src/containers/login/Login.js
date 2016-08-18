/**
 * Created by Chris Ho on 8/8/2016.
 */
import React, {Component, PropTypes} from "react";
import Layout from "../../components/layout/Layout";
import TextInput from "../../components/input-field/TextInput";
import Button from "../../components/button/Button";
import {Link} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as showingPageActions from "../../actions/showingPageActions";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister() {
    this.props.actions.showRegisterPage(true);
  }

  render() {
    return (
      <Layout children={
        <form className="fl-lg-form">
          <span className="fl-login-title">Log in to your FLOW account</span>
          <div className="fl-login-field form-group">
            <TextInput placeholder={"Email"}/>
          </div>
          <div className="fl-login-field form-group">
            <TextInput placeholder={"Password"}/>
          </div>
          <Button autoWidth={true} text={"LOG IN"}/>
          <Link to={"forgot"}>
            <div className="fl-login-forgot-pass">Forgot your password?</div>
          </Link>
          <div className="fl-login-no-account">Don't have an account yet?</div>
          <Button onClick={this.handleRegister} autoWidth={true} text={"REGISTER"}/>
        </form>
      }/>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(showingPageActions, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Login);
