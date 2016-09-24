/**
 * Created by Chris Ho on 8/28/2016.
 */
import React, {Component, PropTypes} from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    const {quotation, urlAvatar, name, country, date, tour} = this.props;
    const styleBg = {
      backgroundImage: 'url(' + urlAvatar + ')'
    };
    return (
      <div className="comment col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <div className="table-avatar">
          <div className="comment-avatar">
            <div className="img" style={styleBg}></div>
          </div>
          <div className="comment-name">
            <div className="tourist-name">{name}</div>
            <div className="comment-country">{country}</div>
            <span className="tour-joined"><a href="#123">{tour}</a>- {date}</span>
          </div>
        </div>
        <p className="quotation">
          <i className="fa fa-quote-left fa-1x"/>
          {quotation}
        </p>

      </div>
    );
  }
}

Comment.propTypes = {
  quotation: PropTypes.string,
  urlAvatar: PropTypes.string,
  name: PropTypes.string,
  country: PropTypes.string,
  date: PropTypes.string,
  tour: PropTypes.string
};

export default Comment;
