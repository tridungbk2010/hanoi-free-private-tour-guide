/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import TextInput from "../input-field/TextInput";
import SelectInput from "../input-field/SelectInput";
import CheckBox from "../input-field/CheckBox";
import "./SubscribeField.scss";
import {COUNTRY_DATA, DATA_COMPANY_SIZE} from "../../constants/dataConst";

class SubscribeForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const urlIconPerson = require("../../images/icon-person.svg");
    const urlIconMail = require("../../images/icon-mail.svg");
    const urlIconPhone = require("../../images/icon-phone.svg");
    const urlIconBuilding = require("../../images/icon-buiding.svg");
    const urlIconGroup = require("../../images/icon-group.svg");
    const urlIconMap = require("../../images/icon-map-point.svg");
    const {dataForm, onChange, onSave, errors, saving} = this.props;
    return (
      <div className="fl-form-subscribe container-fluid">
        <div className="col-md-6 col-sm-6 col-xs-12 fl-form">
          <form>
            <div className="fl-vertical-field">
              <div>
                <TextInput urlIcon={urlIconPerson}
                           name="firstName"
                           onChange={onChange}
                           value={dataForm.firstName}
                           error={errors.firstName}
                           placeholder="First Name"/>
              </div>
              <div>
                <TextInput name="lastName"
                           onChange={onChange}
                           value={dataForm.lastName}
                           error={errors.lastName}
                           placeholder="Last Name"/>
              </div>
            </div>
            <div className="fl-horizontal-field">
              <div>
                <TextInput urlIcon={urlIconMail}
                           name="email"
                           value={dataForm.email}
                           error={errors.email}
                           onChange={onChange}
                           placeholder="email@email.com"/>
              </div>
              <div>
                <TextInput urlIcon={urlIconPhone} name="phoneNumber"
                           onChange={onChange}
                           value={dataForm.phoneNumber}
                           error={errors.phoneNumber}
                           placeholder="eg:0977825106"/>
              </div>
              <div>
                <TextInput urlIcon={urlIconBuilding} name="companyName"
                           onChange={onChange}
                           value={dataForm.companyName}
                           error={errors.companyName}
                           placeholder="Company name"/>
              </div>
            </div>
            <div className="fl-vertical-field">
              <SelectInput urlIcon={urlIconGroup}
                           name="companySize"
                           onChange={onChange}
                           value={dataForm.companySize}
                           error={errors.companySize}
                           defaultOption="Company size"
                           options={DATA_COMPANY_SIZE}
                           placeholder="Company size"/>

              <SelectInput urlIcon={urlIconMap}
                           onChange={onChange}
                           error={errors.country}
                           name="country"
                           value={dataForm.country}
                           defaultOption="Country"
                           options={COUNTRY_DATA}
                           placeholder="Country"/>
            </div>

            <div className="fl-checkbox">
              <CheckBox
                ref="checkbox"
                name="hrBrief"
                onChange={onChange}
                text="Subscribe to our HR research briefs"
              />
            </div>
            <div className="btn-save-form">
              {saving &&<i className="fa fa-spinner fa-spin fa-lg fa-fw saving" />}
              <input
                type="submit"
                value={saving ? "SAVING" : "REQUEST A DEMO"}
                className="btn btn-primary fl-cover-submit-btn"
                onClick={onSave}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SubscribeForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  saving: PropTypes.bool,
  dataForm: PropTypes.object,
  errors: PropTypes.object
};

export default SubscribeForm;
