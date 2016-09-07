/**
 * Created by Chris Ho on 8/31/2016.
 */
import React, {Component, PropTypes} from "react";
import "./BookTourForm.scss";
import {TOUR_DATA} from "../../constants/dataConst";
import SuccessPage from './SuccessPage';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as overlayActions from "../../actions/overlayActions";
import * as touristActions from "../../actions/touristActions";

class BookTourForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      currentTour: "",
      errors: {},
      tourist:{},
      saving: false,
      bookSuccess:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.showLayoutOverlay = this.showLayoutOverlay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    let tourist = this.state.tourist;
    tourist[field] =  event.target.value;
    const errors = {};
    if(field === "tour"){
      this.setState({currentTour: event.target.value});
    }
    if(field === "no" && event.target.value >= 1){
      this.setState({number:event.target.value});
    }
    if (!tourist.tour) {
      errors.tour = "Should not be empty";
    }
    this.setState({
      tourist: tourist,
      errors:errors
    });
  }

  formIsValid() {
    let isValid = true;
    let errors = {};

    if (this.state.tourist.tourist.length < 5) {
      errors.tourist = 'Title must be at least 5 characters.';
      isValid = false;
    }

    this.setState({errors: errors});
    return isValid;
  }

  showLayoutOverlay() {
    const {actions} = this.props;
    actions.showLayout(false);
  }

  handleSubmit(event){
    const {actions} = this.props;
    event.preventDefault();
    if(!this.formIsValid()){
      return;
    }
    console.log("data",this.state.tourist);
    console.log("errors",this.state.errors);
    this.setState({saving: true});
    actions.saveTourist(this.state.tourist).then(()=>{
      this.setState({saving: false});
      this.setState({bookSuccess: true});
    }).catch(() => {
      this.setState({bookSuccess: false});
      this.setState({saving: false});
    });
  }

  render() {
    return (
      <div className="layout-form">
        <span onClick={this.showLayoutOverlay} className="x-btn"><i className="fa fa-times fa-2x"/></span>
        {this.state.bookSuccess ?<SuccessPage />:<div>
          <div className="head-intro">
            <h4 className="title">Please select a Tour</h4>
            <p className="">
              Thank you for choosing Hanoi Free private tour guide,
              please select a!
            </p>
          </div>

          <div className="material-form">
            <form className="form">
              <div className="form-group row">
                <div className="col-xs-6">
                  <label className="col-form-label">Name</label>
                  <input name="tourist"
                         onChange={this.handleChange}
                         className="form-control"
                         type="text"
                         placeholder="Your name"/>
                </div>
                <div className="col-xs-6">
                  <label className="col-form-label">Nation</label>
                  <input name="country"
                         type="text"
                         onChange={this.handleChange}
                         className="form-control"
                         placeholder="Your country"/>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-xs-6">
                  <label>Tour</label>
                  <select className="form-control"
                          onChange={this.handleChange}
                          name="tour">
                    {TOUR_DATA.map((tour, index) =>
                      <option key={index} value={tour.name}>{tour.name}</option>
                    )}
                  </select>
                </div>
                <div className="col-xs-6">
                  <label>Time</label>
                  <select className="form-control" onChange={this.handleChange} name="time">
                    {TOUR_DATA.filter((tour) => tour.name === this.state.currentTour).map((tourTime, index)=>
                      tourTime.time.map((time, index)=> <option key={index} value={time}>{time}</option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-xs-6">
                  <label className="col-form-label">Date of departure</label>
                  <input name="date"
                         className="form-control"
                         type="date"
                         onChange={this.handleChange}/>
                </div>
                <div className="col-xs-6">
                  <label className="col-form-label">Number of tourists</label>
                  <input name="no"
                         className="form-control"
                         type="number"
                         value={this.state.number}
                         onChange={this.handleChange}/>
                </div>
              </div>

              <div className="form-group">
                <label>Pickup Address</label>
                <input type="text" className="form-control"
                       name="pickup"
                       onChange={this.handleChange}
                       placeholder="Your hotel address in Vietnam"/>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input name="email"
                       type="email"
                       onChange={this.handleChange}
                       className="form-control"
                       placeholder="email@email.com"/>
              </div>

              <div className="form-group">
                <label>Other request</label>
                <textarea name="request"
                          onChange={this.handleChange}
                          className="form-control"
                          rows="2"/>
              </div>
              <button type="submit"
                      onClick={this.handleSubmit}
                      className="btn btn-primary">Book</button>
              {this.state.saving && <i className="fa fa-spinner fa-spin fa-2x fa-fw" />}
            </form>
          </div>
        </div>}


      </div>
    );
  }
}

BookTourForm.childContextTypes = {
  label: PropTypes.string,
  actions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},touristActions,overlayActions), dispatch)
  }
}

export default connect(null, mapDispatchToProps)(BookTourForm);
