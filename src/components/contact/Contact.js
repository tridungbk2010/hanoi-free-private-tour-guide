/**
 * Created by Chris Ho on 8/3/2016.
 */
import React, {Component} from "react";
import ContactItem from "./ContactItem";
import Button from "../../components/button/Button";
import "./Contact.scss";
import NetworkIcon from '../../components/common/NetworkIcon';

const DATA = [
  {
    place: "BERLIN",
    national: "Germany",
    address: ["Zehdenicker Straße 1","10119 Berlin"],
    urlMap:"https://www.google.com/maps/embed/v1/place?q=Zehdenicker+Straße+1+10119+Berlin+Germany&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"
  },
  {
    place: "TOKYO",
    national: "Japan",
    address: ["2-26-8 Jingumae","4F Shibuya-ku","Tokyo 150-0001"],
    urlMap:"https://www.google.com/maps/embed/v1/place?q=2-26-8+Jingumae+4F&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"
  },
  {

    place: "SAN FRANCISCO",
    national: "United States",
    address: ["582 Market Street, Suite 204","San Francisco","CA 94104"],
    urlMap:"https://www.google.com/maps/embed/v1/place?q=582+Market+Street,+Suite+204+San+Francisco+CA+94104+United+States&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"
  }
];


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
        <p className="fl-contact-desc">The FLOW team is based in Berlin, and our parent company, Wahl & Case also has
          offices in Tokyo and San Francisco.</p>
        {
          DATA.map((data, id) => <ContactItem
            key={id}
            place={data.place}
            address={data.address}
            national={data.national}
            urlMap={data.urlMap}
          />)
        }
        <div className="fl-contact-network">
          <div className="fl-contact-network-btn">
            <Button text={"SEND US AN EMAIL"} onClick={this.handleEmail} width={180}/>
          </div>

          <p>Or follow us on social media:</p>
          <NetworkIcon/>
        </div>
      </div>
    );
  }
}

export default Contact;
