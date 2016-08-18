/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {PropTypes} from "react";
import "./SelectInput.scss";

const SelectInput = ({name, onChange, defaultOption, value, error, options, urlIcon}) => {
  const styleInput = {
    backgroundImage: "url(" + urlIcon + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "scroll",
    backgroundColor: "#fff",
    backgroundPosition: "10px center"
  };

  return (
    <div className="form-group">
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select
          style={urlIcon && styleInput}
          name={name}
          value={value}
          onChange={onChange}
          className="form-control fl-select-field">
          <option className="fl-option-field-default" value={defaultOption}>{defaultOption}</option>
          {options.map((option, index) => <option className="fl-option-field-value" key={index}
                                                  value={option}>{option}</option>)
          }
        </select>
        {error && <span className="fl-alert">{error}</span>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  urlIcon: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array
};

export default SelectInput;
