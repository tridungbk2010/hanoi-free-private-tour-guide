/**
 * Created by Chris Ho on 8/20/2016.
 */
import React, {Component, PropTypes} from "react";
import DateTimeField from "react-bootstrap-datetimepicker";
import './DatePicker.scss';

class DatePicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hn-date-picker">
        <DateTimeField defaultText="Departure date"/>
      </div>
    );
  }
}

DatePicker.propTypes = {
  optionalNumber: PropTypes.number
};

export default DatePicker;
