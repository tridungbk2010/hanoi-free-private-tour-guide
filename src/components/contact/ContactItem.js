/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {PropTypes} from "react";
import './Contact.scss';

const ContactItem = (props)=> {
  const styleIframe = {
    height:160,
    width:"100%",
    border:0
  };
  return (
    <div className="container-fluid fl-contact-items">
      <div className="col-sm-6 col-md-6 col-xs-12 fl-contact-item">
        <span className="fl-contact-place">{props.place}</span>
        <div>
          {
            props.address.map((ad,id) =><p key={id}>{ad}</p>)
          }
        </div>

        <p>{props.national}</p>
      </div>
      <div className="col-sm-6 col-md-6 col-xs-12 fl-contact-item">
        <iframe style={styleIframe} frameBorder="0"
                src={props.urlMap}>
        </iframe>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  place: PropTypes.string,
  address: PropTypes.array,
  national: PropTypes.string,
  urlMap: PropTypes.string
};

export default ContactItem;
