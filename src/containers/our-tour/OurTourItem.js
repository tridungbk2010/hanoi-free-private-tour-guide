/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {PropTypes, Component} from "react";
import "./OurTourItem.scss";
import ManageBookBtn from "./ManageBookBtn";

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

    const {avatarUrl, tourName, description} = this.props;
    return (
      <div className="item-tour">
        <div className="tour-item">
          <div className="fl-team-member-item" style={styleBackground(avatarUrl)}>
          </div>
          <div className="text-tour">
            <span className="tour-name">{tourName}</span>

            <div className="des">
              {description.map((data, index)=><p key={index}><span>{index + 1}. </span>{data}</p>)}
            </div>
            <ManageBookBtn tour={tourName}/>
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
  time: PropTypes.array
};

// function splitString(str) {
//     return str.substring(str.length - 8);
// }
export default OurTourItem;

//<span className="time-tour-item"><i className="fa fa-clock-o" />
             // Time available:{time.map((data, index)=> <span key={index}>
               // <i>
                 // {splitString(data)}
                //</i>
                // or
              //</span>)}
              //</span>
