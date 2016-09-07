/**
 * Created by Chris Ho on 8/28/2016.
 */
import React, {Component, PropTypes} from "react";
import Comment from "./Comment";
import {DATA_COMMENTS} from "../../constants/dataConst";

class CommentList extends Component {
  render() {
    return (
      <div className="comment-box">
        <h4 className="comment-headline-h4">Comments</h4>
        <div className="comment-list">
          {
            DATA_COMMENTS.map((data, index) =>
              <Comment key={index} name={data.name}
                       quotation={data.quotation}
                       country={data.country}
                       date={data.date}
                       urlAvatar={data.urlAvatar}/>
            )
          }
        </div>
      </div>
    );
  }
}

CommentList.propTypes = {
  optionalNumber: PropTypes.number
};

export default CommentList;
