/**
 * Created by Chris Ho on 8/29/2016.
 */
import React, {Component, PropTypes} from 'react';

class SelectInput extends Component {
  render() {
    const {name, label, onChange, defaultOption, value, error, options} = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="form-control">
            <option value="">{defaultOption}</option>
            {options.map((option, index) => {
              return <option key={index} value={option}>{option}</option>;
            })
            }
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    );
  }
}

SelectInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
