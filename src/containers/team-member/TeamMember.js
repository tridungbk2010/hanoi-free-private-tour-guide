/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import TeamMemberItem from "./TeamMemberItem";
import './TeamMember.scss';

class TeamMember extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="fl-team-member container-fluid">
        <h4 className="fl-team-member-title row">OUR TEAM</h4>
        <div className="fl-team-member-data row">
        {
          DATA_TEAM_MEMBER.map((data, id) =>
            <TeamMemberItem
              key = {id}
              avatarUrl={data.url}
              name={data.name}
              position={data.position}
              description={data.description}
              level={data.level}
              major={data.major}
            />
          )
        }
        </div>
      </div>
    );
  }
}

TeamMember.propTypes = {
  optionalNumber: PropTypes.number
};

export default TeamMember;

const DATA_TEAM_MEMBER = [
  {
    url: require("../../images/members/Casey 560x800.png"),
    name: "Casey Wahl",
    position: "CEO",
    description: "Casey wants to change recruitment. He’s deeply passionate about the issue, and " +
    "immensely frustrated with the reputation of the industry. Little innovation has " +
    "happened over the last decades. Casey is out to change all that. Globally. It’s a " +
    "big problem, worth a lifetime of work. Casey resides in Japan, and somehow got " +
    "an Executive MBA from IE Business School."
  },
  {
    url: require("../../images/members/Daniel.png"),
    name: "Daniel Bodonyi",
    position: "Director, FLOW",
    description: "As the head of FLOW, Daniel is focused on helping companies to screen, " +
    "motivate and retain top talent who fit and enrich their culture. A former classical " +
    "pianist, Shakespeare scholar, successful entrepreneur and analyst for top global " +
    "strategy consulting firm L.E.K., as well as the UN, Daniel’s mission is to help your " +
    "clients humanize the workplace using rigorously data-driven and scientifically " +
    "proven approaches."
  },
  {
    url: require("../../images/members/Jasper 280x400.jpg"),
    name: "Jasper Yang",
    position: "Product Ops",
    description: "Jasper’s passion for talent management started at university whilst founding a " +
    "startup, and he has since worked with several startups on a number of projects " +
    "including digital marketing and systems optimization. At FLOW, he is dedicated " +
    "to ensuring that employers benefit from attracting and retaining top talent, and " +
    "that employees are satisfied and fulfilled at work. He is Taiwanese-born, educated in Australia and Japan."
  },
  {
    url: require("../../images/members/Ildikó.png"),
    name: "Ildikó Szlama",
    position: "Psychologist",
    description: "Ildikó has an MA in Work and Organizational Psychology from the Budapest " +
    "University of Technology and Economics. An expert at talent management, " +
    "competency modeling, motivation and organizational development, she has " +
    "conducted research on stress and well-being at the Otto Friedrich University in " +
    "Germany, and has worked as a psychologist, trainer and consultant for a number " +
    "of corporations and startups.",
    level: "",
    major: ""
  },
  {
    url: require("../../images/members/Barna.png"),
    name: "Barnabás Király",
    position: "Psychologist",
    description: "Barnabás has an MA in Psychology from Károli Gáspár University in Budapest. " +
    "In addition to his practice as a therapist and trainer, he has participated in the " +
    "development of various psychological tests, including a test to help with career " +
    "orientation and the Hungarian standardization of the new Rorschach test. He " +
    "also spent half a year in Chile under the Start-Up Chile accelerator program.",
    level: "",
    major: ""
  },
  {
    url: require("../../images/members/Kristine 560x800.png"),
    name: "Kristine Ayuzawa",
    position: "Talent Manager",
    description: "Kristine strives to create an advantage through talent and the strength of the " +
    "brand’s global culture; organizing the business to attract and retain the best, " +
    "while creating an environment where targets are exceeded and learning is " +
    "continuous. She has almost 10 years of recruitment industry expertise, is SPHR " +
    "and SHRM-SCP certified, and holds a B.S. in Human Development from Cornell.",
    level: "",
    major: ""
  }
];
