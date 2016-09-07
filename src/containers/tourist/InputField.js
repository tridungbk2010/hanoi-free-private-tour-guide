/**
 * Created by Chris Ho on 8/21/2016.
 */
import React, {Component, PropTypes} from 'react';

class InputField extends Component {
  render() {
    const {label,name,value, type, placeholder, onChange, error} = this.props;
    return (
      <div className="form-group">
        {label && <label>{label}</label>}
        <input
          className="form-control"
          name={name}
          type={type}
          onChange = {onChange}
          value={value}
          placeholder={placeholder} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

InputField.propTypes = {
  name:PropTypes.string,
  type:PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value:PropTypes.string,
  onChange: PropTypes.func,
  error:PropTypes.string
};

export default InputField;
