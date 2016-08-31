/**
 * Created by Chris Ho on 8/28/2016.
 */
import React, {Component, PropTypes} from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    const {quotation, urlAvatar, name} = this.props;
    return (
      <div className="comment col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <div className="table-avatar">
          <div className="comment-avatar">
            <img src={urlAvatar} alt={name} />
          </div>
          <div className="comment-name">
            <h5>{name}</h5>
          </div>
        </div>
        <p className="quotation">
          {quotation}
        </p>
        <p>Tour have joined:<a href="#123">Street food</a></p>
      </div>
    );
  }
}

Comment.propTypes = {
  quotation: PropTypes.string,
  urlAvatar:PropTypes.element,
  name: PropTypes.string
};

export default Comment;
