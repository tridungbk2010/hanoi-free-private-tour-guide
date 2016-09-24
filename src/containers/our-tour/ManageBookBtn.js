/**
 * Created by Chris Ho on 9/8/2016.
 */
import React, {Component, PropTypes} from "react";
import Button from "../../components/button/Button";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as overlayActions from "../../actions/overlayActions";

class ManageBookBtn extends Component {
  constructor(props) {
    super(props);
    this.handleBook = this.handleBook.bind(this);
  }

  handleBook() {
    const {actions, tour} = this.props;
    actions.showLayout({show:true,tour:tour});
  }

  render() {
    const iconBook = <i className="fa fa-arrow-circle-right"/>;
    return (
      <div>
        <Button text={"Book free tour"}
                icon={iconBook}
                onClick={this.handleBook}
                autoWidth={true}
                iconPos={"right"}
        />
      </div>
    );
  }
}

ManageBookBtn.propTypes = {
  actions: PropTypes.object,
  tour:PropTypes.string
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(overlayActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ManageBookBtn);
