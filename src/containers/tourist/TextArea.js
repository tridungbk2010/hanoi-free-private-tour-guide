/**
 * Created by Chris Ho on 8/29/2016.
 */
import React, {Component, PropTypes} from 'react';

class TextArea extends Component {
  render() {
    const {name, placeholder} = this.props;
    return (
      <div className="form-group">
        <textarea name={name} className="form-control" rows="3" placeholder = {placeholder}/>
      </div>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string,
  placeholder:PropTypes.string
};

export default TextArea;
