/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {PropTypes, Component} from "react";
import "./OurTourItem.scss";
import Button from "../../components/button/Button";

class OurTourItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
  }


  render() {
    const styleBackground = (avatarUrl=> {
      return {
        backgroundImage: `url(${avatarUrl})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    });

    const {avatarUrl, tourName, description, time} = this.props;
    return (
      <div className="col-sm-6 col-md-4 col-xs-12 item-tour">
        <div className="tour-item">
          <div className="fl-team-member-item" style={styleBackground(avatarUrl)}>
          </div>
          <div className="text-tour">
            <span className="tour-name">{tourName}</span>
            <span className="time-tour-item"><i className="fa fa-clock-o" aria-hidden="true"/> {time}</span>
            <div className="des">
              {description.map((data, index)=><p key={index}><span>{index + 1}. </span>{data}</p>)}
            </div>
            <Button text={"Book"}/>
          </div>
        </div>
      </div>
    );
  }
}

OurTourItem.propTypes = {
  avatarUrl: PropTypes.string,
  tourName: PropTypes.string,
  description: PropTypes.array,
  time: PropTypes.string
};

export default OurTourItem;
