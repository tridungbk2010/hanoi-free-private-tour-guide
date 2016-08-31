/**
 * Created by Chris Ho on 8/21/2016.
 */
import React, {Component, PropTypes} from "react";
import InputField from "./InputField";
import Button from "../../components/button/Button";
import DatePicker from "../../components/input-field/DatePicker";
import "./RegisterForm.scss";
import SelectInput from "./SelectInput";
import TextArea from "./TextArea";
import {TOUR_NAME_DATA} from "./data";

class RegisterForm extends Component {
  render() {
    const {onChange} = this.props;
    return (
      <div className="ct-form">
        <form className="form-book-tour">
          <h1>Book free tour</h1>
          <div className="form-inline">
            <InputField
              width={60}
              name={"no"}
              type={"text"}
              placeholder={"No"}
              onChange={onChange}/>

            <InputField
              name={"fullName"}
              type={"text"}
              placeholder={"Full name"}
              onChange={onChange}/>
          </div>

          <SelectInput
            name={"tourName"}
            defaultOption={"Tour Name"}
            options={TOUR_NAME_DATA}
          />

          <DatePicker />

          <InputField
            name={"pickUp"}
            type={"text"}
            placeholder={"Pick Up Address"}
            onChange={onChange}/>

          <InputField
            name={"email"}
            type={"email"}
            placeholder={"email@email.com"}
            onChange={onChange}/>

          <InputField
            name={"phone"}
            type={"text"}
            placeholder={"Phone number"}
            onChange={onChange}/>

          <TextArea
            name={"otherRequest"}
            placeholder={"Other request"}
          />

          <Button text={"Book"} autoWidth={true}/>
        </form>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  onChange: PropTypes.func
};

export default RegisterForm;
