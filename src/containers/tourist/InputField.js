/**
 * Created by Chris Ho on 8/21/2016.
 */
import React, {Component, PropTypes} from 'react';

class InputField extends Component {
  render() {
    const {name, type, placeholder, onChange, width} = this.props;
    const styleDiv = {
      width: width && width
    };
    return (
      <div className="form-group">
        <input type={type} className="form-control" style={styleDiv}
          name = {name} placeholder={placeholder} onChange={onChange}/>
      </div>
    );
  }
}

InputField.propTypes = {
  name:PropTypes.string,
  type:PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  width:PropTypes.number
};

export default InputField;
