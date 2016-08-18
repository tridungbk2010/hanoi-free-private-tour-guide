/**
 * Created by Chris Ho on 8/11/2016.
 */
import React, {Component, PropTypes} from 'react';
import './Blog.scss';

class Blog extends Component {
  render() {
    return (
      <div className="fl-blog">
        Blog
      </div>
    );
  }
}

Blog.propTypes = {
  optionalNumber: PropTypes.number
};

export default Blog;
