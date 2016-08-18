/**
 * Created by Chris Ho on 8/14/2016.
 */
import React, {Component, PropTypes} from "react";
import './CheckBox.scss';

class CheckBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      isChecked :true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {
    const {name, text, onChange} = this.props;
    return (
      <label className="fl-checkbox">
        <label className="fancy-checkbox" >
          <input type="checkbox" checked={this.state.isChecked} name={name} onChange={onChange} onClick={this.handleChange}/>
          <span>{text}</span>
        </label>
      </label>
    );
  }
}

CheckBox.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func
};

export default CheckBox;
