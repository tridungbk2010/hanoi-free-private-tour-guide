/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import TextInput from "../input-field/TextInput";
import SelectInput from "../input-field/SelectInput";
import DatePicker from "../input-field/DatePicker";
import CheckBox from "../input-field/CheckBox";
import Recaptcha from "react-recaptcha";
import "./SubscribeField.scss";
import {COUNTRY_DATA, DATA_COMPANY_SIZE} from "../../constants/dataConst";

class SubscribeForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const iconUser = <i className="fa fa-user fa-lg" aria-hidden="true"/>;
    const iconMail = <i className="fa fa-envelope fa-lg" aria-hidden="true"/>;
    const iconPhone = <i className="fa fa-phone fa-lg" aria-hidden="true"/>;
    const iconBuilding = <i className="fa fa-building-o fa-lg" aria-hidden="true"/>;
    const iconGroup = <i className="fa fa-users fa-lg" aria-hidden="true"/>;
    const iconMap = <i className="fa fa-map-marker fa-lg" aria-hidden="true"/>;

    const {dataForm, onChange, onSave, errors, saving, onloadCallback, verifyCallback} = this.props;
    return (
      <div className="fl-form-subscribe container-fluid">
        <div className="col-md-6 col-sm-6 col-xs-12 fl-form">
          <form>
            <div className="fl-horizontal-field">
              <SelectInput icon={iconMap}
                           onChange={onChange}
                           error={errors.country}
                           name="country"
                           value={dataForm.country}
                           defaultOption="Tour name"
                           options={COUNTRY_DATA}
                           placeholder="Tour name"/>

              <DatePicker />
              <TextInput name="lastName"
                         onChange={onChange}
                         value={dataForm.lastName}
                         error={errors.lastName}
                         placeholder="Pickup address"/>
            </div>
            <div className="fl-vertical-field">
              <TextInput name="lastName"
                         onChange={onChange}
                         value={dataForm.lastName}
                         error={errors.lastName}
                         placeholder="Number of adults"/>

              <TextInput name="lastName"
                         onChange={onChange}
                         value={dataForm.lastName}
                         error={errors.lastName}
                         placeholder="Number of kids"/>
            </div>
            <div className="fl-horizontal-field">
              <div>
                <TextInput icon={iconMail}
                           name="email"
                           value={dataForm.email}
                           error={errors.email}
                           onChange={onChange}
                           placeholder="email@email.com"/>
              </div>
              <div>
                <TextInput icon={iconPhone} name="phoneNumber"
                           onChange={onChange}
                           value={dataForm.phoneNumber}
                           error={errors.phoneNumber}
                           placeholder="eg:0977825106"/>
              </div>
              <div>
                <TextInput icon={iconBuilding} name="companyName"
                           onChange={onChange}
                           value={dataForm.companyName}
                           error={errors.companyName}
                           placeholder="Company name"/>
              </div>
            </div>
            <div className="fl-vertical-field">
              <SelectInput icon={iconGroup}
                           name="companySize"
                           onChange={onChange}
                           value={dataForm.companySize}
                           error={errors.companySize}
                           defaultOption="Company size"
                           options={DATA_COMPANY_SIZE}
                           placeholder="Company size"/>

              <SelectInput icon={iconMap}
                           onChange={onChange}
                           error={errors.country}
                           name="country"
                           value={dataForm.country}
                           defaultOption="Country"
                           options={COUNTRY_DATA}
                           placeholder="Country"/>
            </div>
            <Recaptcha
              sitekey="6LcCEygTAAAAAMCoaaLOBscssqO7C0RME-rv6Ek8"
              render="explicit"
              verifyCallback={verifyCallback}
              onloadCallback={onloadCallback}
            />
            <div className="fl-checkbox">
              <CheckBox
                ref="checkbox"
                name="hrBrief"
                onChange={onChange}
                text="Subscribe to our HR research briefs"
              />
            </div>
            <div className="btn-save-form">
              {saving && <i className="fa fa-spinner fa-spin fa-lg fa-fw saving"/>}
              <input
                type="submit"
                value={saving ? "SAVING" : "BOOK FREE TOUR"}
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
  errors: PropTypes.object,
  onloadCallback: PropTypes.func,
  verifyCallback: PropTypes.func
};

export default SubscribeForm;
