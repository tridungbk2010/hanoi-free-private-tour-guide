/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {Component} from "react";
import ContactItem from "./ContactItem";
import Button from "../../components/button/Button";
import "./Contact.scss";
import NetworkIcon from '../../components/common/NetworkIcon';
import {DATA_ADDRESS} from '../../constants/dataConst';

class Contact extends Component {
  constructor(props){
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail(){
    let link = "mailto:me@example.com"
        + "?cc=myCCaddress@example.com"
        + "&subject=" + escape("This is my subject")
      ;

    window.location.href = link;
  }

  render() {
    return (
      <div className="fl-contact">
        <h4 className="fl-contact-title">CONTACT</h4>
        {
          DATA_ADDRESS.map((data, id) => <ContactItem
            key={id}
            place={data.place}
            address={data.address}
            national={data.national}
            urlMap={data.urlMap}
          />)
        }
        <div className="fl-contact-network">
          <div className="fl-contact-network-btn">
            <Button text={"SEND US AN EMAIL"} onClick={this.handleEmail} />
          </div>

          <p>Or follow us on social media:</p>
          <NetworkIcon/>
        </div>
      </div>
    );
  }
}

export default Contact;
