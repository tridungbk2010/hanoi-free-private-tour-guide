// This component handles the App template used on every page.
import React, {PropTypes} from "react";
import Header from "./header/Header";
import MenuIcon from "../components/icon-menu/MenuIcon";
import {connect} from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header leftSide={[<MenuIcon text={"MENU"}/>]}
                loading={this.props.loading}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);


