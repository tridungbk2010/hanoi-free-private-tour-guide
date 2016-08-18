/**
 * Created by Chris Ho on 8/15/2016.
 */
import React, {Component, PropTypes} from "react";
import SubscribeForm from "../../components/subcrible-form/SubscribeForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as sendInBlueActions from "../../actions/sendInBlueActions";
import * as showingPageActions from "../../actions/showingPageActions";
import * as textValidator from '../../constants/validationText';

class ManageRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataForm: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        companySize: '',
        hrBrief:true,
        country: ''
      },
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  updateCourseState(event) {
    const field = event.target.name;
    let dataForm = this.state.dataForm;
    let isChecked = true;
    if (field === "hrBrief") {
      console.log("hrBrief========",event.target.checked);
      isChecked = event.target.checked;
    } else {
      dataForm[field] = event.target.value;
    }
    this.courseFormIsValid();
    return this.setState({
      dataForm: Object.assign({}, dataForm, {hrBrief: isChecked}, {source:this.props.source})
    });
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.dataForm.firstName === "") {
      errors.firstName = textValidator.FIRST_NAME;
      formIsValid = false;
    }

    if (this.state.dataForm.lastName === "") {
      errors.lastName = textValidator.LAST_NAME;
      formIsValid = false;
    }

    if (this.state.dataForm.email === "") {
      errors.email = textValidator.EMAIL;
      formIsValid = false;
    } else if (!validateEmail(this.state.dataForm.email)) {
      errors.email = textValidator.EMAIL_INVALID;
      formIsValid = false;
    }

    if (this.state.dataForm.phoneNumber === "") {
      errors.phoneNumber = textValidator.PHONE_NUMBER;
      formIsValid = false;
    } else if (!validatePhoneNumber(this.state.dataForm.phoneNumber)) {
      errors.phoneNumber = textValidator.PHONE_NUMBER_INVALID;
      formIsValid = false;
    }

    if (this.state.dataForm.companyName === "") {
      errors.companyName = textValidator.COMPANY_NAME;
      formIsValid = false;
    }

    if (this.state.dataForm.companySize === "" ||
      this.state.dataForm.companySize === "Company size"
    ) {
      errors.companySize = textValidator.COMPANY_SIZE;
      formIsValid = false;
    }

    if (this.state.dataForm.country === "" ||
      this.state.dataForm.country === "Country"
    ) {
      errors.country = textValidator.COUNTRY;
      formIsValid = false;
    }
    this.setState({errors: errors});
    return formIsValid;
  }

  handleSave(event) {
    event.preventDefault();
    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({
      saving: true
    });
    this.props.actions.subscribe(this.state.dataForm)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({saving: false});
        throw (error);
      });
  }

  redirect() {
    console.log("dataForm", this.state.dataForm);
    this.props.actions.showRequestSuccessPage(true);
    this.setState({
      saving: false,
      dataForm: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        companySize: '',
        country: ''
      }
    });

  }

  render() {
    return (
      <SubscribeForm
        dataForm={this.state.dataForm}
        onChange={this.updateCourseState}
        errors={this.state.errors}
        onSave={this.handleSave}
        saving={this.state.saving}
      />
    );
  }
}

ManageRequest.propTypes = {
  actions: PropTypes.object,
  emailResponse: PropTypes.object,
  source:PropTypes.string
};

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhoneNumber(dataInput) {
  const dataLength = dataInput.length;
  var reg = /^\d+$/;
  return(reg.test(dataInput) && dataLength > 5 && dataLength < 20);
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},showingPageActions, sendInBlueActions), dispatch)
  }
}

function mapStateToProps(state) {
  return {
    emailResponse: state.sendInBlueReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageRequest);
