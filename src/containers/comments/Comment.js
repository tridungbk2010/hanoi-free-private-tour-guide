/**
 * Created by Chris Ho on 8/28/2016.
 */
import React, {Component, PropTypes} from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    const {quotation, urlAvatar, name, country,date} = this.props;
    return (
      <div className="comment col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <div className="table-avatar">
          <div className="comment-avatar">
            <img src={urlAvatar} alt={name} />
          </div>
          <div className="comment-name">
            <span className="tourist-name">{name}</span>
            <span className="comment-country">State: {country}</span>
            <span className="tour-joined">Tour: <a href="#123">Street food</a></span>
            <span className="date">{date}</span>
          </div>
        </div>
        <p className="quotation">
          <i className="fa fa-quote-left fa-1x" />
          {quotation}
        </p>

      </div>
    );
  }
}

Comment.propTypes = {
  quotation: PropTypes.string,
  urlAvatar:PropTypes.element,
  name: PropTypes.string,
  country: PropTypes.string,
  date:PropTypes.string
};

export default Comment;
