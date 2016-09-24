/**
 * Created by Chris Ho on 8/28/2016.
 */
import React, {Component, PropTypes} from "react";
import Comment from "./Comment";
import {DATA_COMMENTS} from "../../constants/dataConst";
// import Slider from 'react-slick';

class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const settings = {
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 1
    // };

    return (
      <div className="comment-box">
        <h4 className="comment-headline-h4">Recently Comments</h4>
        <div className="comment-list">
          {DATA_COMMENTS.map((data, index)=>
            <Comment key={index} name={data.name}
                     quotation={data.quotation}
                     country={data.country}
                     date={data.date}
                     tour={data.tour}
                     urlAvatar={data.urlAvatar}/>
          )}
        </div>
      </div>
    );
  }
}

CommentList.propTypes = {
  optionalNumber: PropTypes.number
};

export default CommentList;
