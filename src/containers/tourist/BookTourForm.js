/**
 * Created by Chris Ho on 8/31/2016.
 */
import React, { Component, PropTypes } from 'react';
import './BookTourForm.scss';
import { DATA_TOUR, COUNTRY_DATA } from '../../constants/dataConst';
import SuccessPage from './SuccessPage';
import Button from '../../components/button/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as overlayActions from '../../actions/overlayActions';
import * as touristActions from '../../actions/touristActions';

class BookTourForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // number: 1,
      currentTour: '',
      errors: {},
      tourist: {},
      saving: false,
      bookSuccess: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.showLayoutOverlay = this.showLayoutOverlay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    let tourist = this.state.tourist;
    tourist[field] = event.target.value;
    const errors = {};
    if (field === 'tour') {
      this.setState({ currentTour: event.target.value });
    }
    this.setState({
      tourist: tourist,
      errors: errors
    });
  }

  formIsValid() {
    let isValid = true;
    let errors = {};
    if (this.state.tourist.name && this.state.tourist.name.length < 5) {
      errors.name = 'Title must be at least 5 characters.';
      isValid = false;
    }

    if (!this.state.tourist.tour && !this.props.overlayTour.tour) {
      isValid = false;
      errors.tour = 'Should not be empty';
    }

    if (!this.state.tourist.date) {
      isValid = false;
      errors.date = 'Should not be empty';
    }

    if (!this.state.tourist.no) {
      isValid = false;
      errors.no = 'Should not be empty';
    }

    if (!this.state.tourist.name) {
      isValid = false;
      errors.name = 'Please fill your name';
    }

    if (!this.state.tourist.pickup) {
      isValid = false;
      errors.pickup = 'Please fill your pickup address';
    }

    if (!this.state.tourist.email) {
      isValid = false;
      errors.email = 'Please fill your email';
    } else if (!validateEmail(this.state.tourist.email)) {
      isValid = false;
      errors.email = 'Your email is invalid';
    } else if (this.state.tourist.email === '') {
      isValid = false;
      errors.email = 'Please fill your email';
    }

    if (!this.state.tourist.country) {
      isValid = false;
      errors.country = 'Please fill your country';
    }

    this.setState({ errors: errors });
    return isValid;
  }

  showLayoutOverlay() {
    const { actions } = this.props;
    actions.showLayout(false);
  }

  handleSubmit(event) {
    const { actions } = this.props;
    event.preventDefault();
    if (!this.formIsValid()) {
      return;
    }
    this.setState({ saving: true });
    let existTour = this.props.overlayTour.tour
      ? Object.assign({}, this.state.tourist, {
          tour: this.props.overlayTour.tour
        })
      : this.state.tourist;
    if (!this.state.tourist.time) {
      const tourDefaultTime = DATA_TOUR.find(tour => tour.name === existTour.tour);
      existTour = tourDefaultTime
        ? Object.assign({}, existTour, { time: tourDefaultTime.time[0] })
        : existTour;
    }
    actions.saveTourist(existTour)
      .then(() => {
        this.setState({ saving: false, bookSuccess: true });
      })
      .catch(() => {
        this.setState({ bookSuccess: false, saving: false });
      });
  }

  render() {
    const loading = <i className="fa fa-spinner fa-spin fa-lg fa-fw" />;
    return (
      <div className="layout-form">
        <span onClick={this.showLayoutOverlay} className="x-btn">
          <i className="fa fa-times fa-lg" />
        </span>
        {this.state.bookSuccess ? (
          <SuccessPage />
        ) : (
          <div>
            <div className="head-intro">
              <h4 className="modal-header">Booking Tour</h4>
              <p>
                Thank you for choosing Hanoi Free private tour guide! please
                pick a Tour.
              </p>
            </div>

            <div className="material-form">
              <form className="form">
                <div className="form-group row">
                  <div className="col-xs-6">
                    <div className="ui left icon input">
                      <input
                        name="name"
                        onChange={this.handleChange}
                        className="form-control"
                        type="text"
                        placeholder="Your name"
                      />
                      <i className="add user icon" />
                    </div>
                    {this.state.errors.name && (
                      <div className="tour-alert">{this.state.errors.name}</div>
                    )}
                  </div>
                  <div className="col-xs-6">
                    <div className="ui left icon select">
                      <select
                        className="form-control"
                        onChange={this.handleChange}
                        name="country"
                      >
                        <option value="Select a Tour">
                          Select your country
                        </option>
                        {COUNTRY_DATA.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    {this.state.errors.country && (
                      <div className="tour-alert">
                        {this.state.errors.country}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-xs-6">
                    {this.props.overlayTour.tour ? (
                      <select
                        className="form-control"
                        disabled="disabled"
                        name="tour"
                      >
                        <option value={this.props.overlayTour.tour}>
                          {this.props.overlayTour.tour}
                        </option>
                      </select>
                    ) : (
                      <select
                        className="form-control"
                        onChange={this.handleChange}
                        name="tour"
                      >
                        <option value="Select a Tour">Select a Tour</option>
                        {DATA_TOUR.map((tour, index) => (
                          <option key={index} value={tour.name}>
                            {tour.name}
                          </option>
                        ))}
                      </select>
                    )}
                    {this.state.errors.tour && (
                      <div className="tour-alert">{this.state.errors.tour}</div>
                    )}
                  </div>
                  <div className="col-xs-6">
                    {this.props.overlayTour.tour ? (
                      <select
                        className="form-control"
                        onChange={this.handleChange}
                        name="time"
                      >
                        {getItemInArray(
                          this.props.overlayTour.tour, DATA_TOUR).time.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <select
                        className="form-control"
                        onChange={this.handleChange}
                        name="time"
                      >
                        {DATA_TOUR.filter(tour => tour.name === this.state.currentTour).map((tourTime, index) =>
                          tourTime.time.map((time, index) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          )))}
                      </select>
                    )}
                    {this.state.errors.time && (
                      <div className="tour-alert">{this.state.errors.time}</div>
                    )}
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-xs-6">
                    <div className="ui left icon input">
                      <input
                        name="date"
                        className="form-control"
                        placeholder="Date of departure"
                        type="date"
                        onChange={this.handleChange}
                      />
                      <i className="calendar icon" />
                    </div>
                    {this.state.errors.date && (
                      <div className="tour-alert">{this.state.errors.date}</div>
                    )}
                  </div>
                  <div className="col-xs-6">
                    <div className="ui left icon input">
                      <input
                        name="no"
                        className="form-control"
                        type="number"
                        min={1}
                        placeholder="Number of Tourist"
                        onChange={this.handleChange}
                      />
                      <i className="users icon" />
                    </div>
                    {this.state.errors.no && (
                      <div className="tour-alert">{this.state.errors.no}</div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <div className="ui left icon input full-width">
                    <input
                      type="text"
                      className="form-control"
                      name="pickup"
                      onChange={this.handleChange}
                      placeholder="Your hotel address in Vietnam"
                    />
                    <i className="building outline icon" />
                  </div>
                  {this.state.errors.pickup && (
                    <div className="tour-alert">{this.state.errors.pickup}</div>
                  )}
                </div>

                <div className="form-group">
                  <div className="ui left icon input full-width">
                    <input
                      name="email"
                      type="email"
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="email@email.com"
                    />
                    <i className="mail icon" />
                  </div>
                  {this.state.errors.email && (
                    <div className="tour-alert">{this.state.errors.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    name="request"
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Other request"
                    rows="2"
                  />
                </div>
                <div className="btn-fpt">
                  <Button
                    text={this.state.saving ? 'Saving...' : 'Submit'}
                    onClick={this.handleSubmit}
                    icon={this.state.saving && loading}
                    autoWidth={true}
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

BookTourForm.childContextTypes = {
  label: PropTypes.string,
  actions: PropTypes.object,
  overlayTour: PropTypes.object
};

function getItemInArray(itemName, arr) {
  const existingItemIndex = arr.findIndex(item => item.name == itemName);
  return arr[existingItemIndex];
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, touristActions, overlayActions),
      dispatch)
  };
}

function mapStateToProps(state) {
  return {
    overlayTour: state.overlayReducer
  };
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookTourForm);
