/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {PropTypes} from "react";
import "./TextInput.scss";

const TextInput = ({name, onChange, placeholder, value, error, icon}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }
  const classErrorIcon = error?"icon-in-form has-error-icon":"icon-in-form";
  const hasPaddingClass = icon ? "form-control fl-input" : "form-control";
  return (
    <div className={wrapperClass}>
      <div className="field">
        <span className={classErrorIcon}>
          {icon}
        </span>
        <input
          type="text"
          name={name}
          className={hasPaddingClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {error && <span className="fl-alert">{error}</span>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
