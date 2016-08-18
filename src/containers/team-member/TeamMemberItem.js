/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {PropTypes, Component} from "react";
import "./TeamMemberItem.scss";

class TeamMemberItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({isHover: true});
  }

  handleOnMouseLeave() {
    this.setState({isHover: false});
  }

  render() {
    const styleBackground = (avatarUrl=> {
      return {
        backgroundImage: this.state.isHover ? `linear-gradient(to bottom, rgba(6, 27, 35, 0.8), rgba(6, 27, 35, 0.8)), 
        url(${avatarUrl})` : `url(${avatarUrl})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    });

    const {avatarUrl, name, position, description, level, major} = this.props;
    return (
      <div className="col-sm-6 col-md-4 col-xs-12"
           onMouseLeave={this.handleOnMouseLeave}
           onMouseEnter={this.handleMouseEnter}
      >
        <div className="fl-team-member-item"
             style={styleBackground(avatarUrl)}>
          {this.state.isHover && <div className="fl-tem-member-bios">
            <div className="fl-team-member-name">{name}</div>
            <div className="fl-team-member-pos">{position}</div>
            <div className="fl-team-member-item-description">{description}</div>
          </div>}
          {this.state.isHover && <div className="fl-team-member-level">
            <div className="fl-team-member-level-lv">{level}</div>
            <div className="fl-team-member-level-major">{major}</div>
          </div>}
        </div>
      </div>
    );
  }
}

TeamMemberItem.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  level: PropTypes.string,
  major: PropTypes.string
};

export default TeamMemberItem;
