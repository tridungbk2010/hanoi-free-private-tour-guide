/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {PropTypes} from "react";
import './TextInput.scss';

const TextInput = ({name, onChange, placeholder, value, error, urlIcon}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }
  const styleInput = {
    backgroundImage: "url(" + urlIcon + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "scroll",
    backgroundPosition: "10px center",
    paddingLeft:30
  };

  return (
    <div className={wrapperClass}>
      <div className="field">
        <input
          style={urlIcon && styleInput}
          type="text"
          name={name}
          className="form-control"
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
  urlIcon: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
