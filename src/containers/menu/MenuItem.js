/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {PropTypes} from 'react';
import './MenuItem.scss';

const MenuItem = (props) => {
    return (
    <li onClick={props.onClick} className="menuItem">{props.text}</li>
    );
  };

MenuItem.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
  onClick:PropTypes.func
};

export default MenuItem;
