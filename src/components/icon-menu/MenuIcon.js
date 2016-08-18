/**
 * Created by Chris Ho on 8/1/2016.
 */
/**
 * Created by Chris Ho on 8/1/2016.
 */
import React, {PropTypes} from "react";

const MenuIcon = (props)=> {
  const styleMenuIcon = {
    fontSize: 24
  };
  return (
    <div>
      <img className="glyphicon glyphicon-menu-hamburger"
            aria-hidden="true"
            style={styleMenuIcon}>
      </img>
      {props.text}

    </div>

  );
};

MenuIcon.propTypes = {
  text: PropTypes.string,
  onHover: PropTypes.func,
  onClick: PropTypes.func
};

export default MenuIcon;
