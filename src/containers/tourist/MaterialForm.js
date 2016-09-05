/**
 * Created by Chris Ho on 8/31/2016.
 */
import React, {Component, PropTypes} from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import baseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import "./MaterialForm.scss";
import RaisedButton from 'material-ui/RaisedButton';
import {TOUR_DATA} from '../../constants/dataConst';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



class MaterialForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 0,
      tour: 0
    };
    this.handleChangeTourName = this.handleChangeTourName.bind(this);
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  handleChangeTourName(tour) {
    this.setState({tour:tour});
  }

  render() {
    return (
      <div className="layout-form">
        <h2 className="title">Please pick up a kind of tour</h2>
        <div className="material-form">
          <form className="form">
            <div>
              <span className="date"><DatePicker hintText="Date of departure" style={{width:180}}/></span>
              <span className="time"><TimePicker hintText="Time" style={{width:100}}/></span>
            </div>
            <TextField
              fullWidth={true}
              hintText="No"
            />

            <TextField
              fullWidth={true}
              hintText="Name"
            />
            <TextField
              fullWidth={true}
              hintText="Nation e.g: USA, England, Australia"
            />
            <SelectField value={this.state.tour} onChange={this.handleChangeTourName} fullWidth={true}>
              {
                TOUR_DATA.map((data, index) => <MenuItem value={index} primaryText={data} />)
              }
            </SelectField>

            <TextField
              fullWidth={true}
              hintText="Pickup address"
            />
            <TextField
              fullWidth={true}
              hintText="Email"
            />
            <TextField
              hintText="Other request"
              floatingLabelText="Other request"
              multiLine={true}
              rows={2}
             />
            <RaisedButton label="Book" primary={true} />
          </form>
        </div>
      </div>
    );
  }
}

MaterialForm.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default MaterialForm;
