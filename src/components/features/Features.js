/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import FeatureItem from '../../components/features/FeatureItem';
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
import './Features.scss';
import {DATE_FEATURES} from '../../constants/dataConst';

class Features extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.actions.showRequestDemoPage(true);
    this.props.actions.getSource("Web-features");
  }

  render() {
    return (
      <div className="fl-features container-fluid">
        <h4 className="fl-headline-h4">FEATURES</h4>
        {DATE_FEATURES.map((data, id) => <FeatureItem
          key ={id}
          onClick={this.handleClick}
          index={DATE_FEATURES.indexOf(data)}
          urlImg={data.urlImg}
          headline={data.headline}
          content={data.content}/>)}
      </div>
    );
  }
}

Features.propTypes = {
  actions:PropTypes.object
};

export default Features;
