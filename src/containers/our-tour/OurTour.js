/**
 * Created by Chris Ho on 8/2/2016.
 */
import React, {Component, PropTypes} from "react";
import OurTourItem from "./OurTourItem";
import "./OurTour.scss";

class OurTour extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fl-team-member bodyContent container-fluid">
        <h4 className="fl-team-member-title row">OUR TOUR</h4>
        <div className="fl-team-member-data row">
          {
            DATA_TEAM_MEMBER.map((data, id) =>
              <OurTourItem
                key={id}
                avatarUrl={data.url}
                tourName={data.tourName}
                description={data.description}
                time={data.time}
              />
            )
          }
        </div>
      </div>
    );
  }
}

OurTour.propTypes = {
  optionalNumber: PropTypes.number
};

export default OurTour;

const DATA_TEAM_MEMBER = [
  {
    url: require("../../images/tg5.jpg"),
    tourName: "Hanoi Old Quarter walking Tour",
    time: "Half day - 3h",
    description: [
      "Sword Lake",
      "Old quarter introduction",
      "76 Hang Buom",
      "Đồng Xuân Market",
      "Ca Tru Singing (at Ancient house:87 Ma May/ 28 Hang Buom)",
      "Long Biên Bridge",
      "The house No48, Hang Ngang street",
      "Hanoi Ceramic Mosaic Mural"
    ]
  },
  {
    url: require("../../images/french.jpg"),
    tourName: "French Quarter walking Tour",
    time: "Half day - 3h",
    description: [
      "Sword Lake",
      "St. Joseph's Cathedral, Cong Caphe",
      "Hoa lo Prison",
      "Trang Tien Ice Cream",
      "Opera House, and Hilton Opera",
      "National Museum of Vietnamese History",
      "Museum of the Vietnamese Revolution",
      "The State Bank of Vietnam"
    ]
  },
  {
    url: require("../../images/war-site.jpg"),
    tourName: "Hanoi war sites walking Tour",
    time: "Half day - 3h",
    description: [
      "Military History Museum",
      "Hoa lo Prison",
      "Vietnam People's Air Force Museum",
      "Hanoi  B52 Victory Museum",
      "B-52 Wreck in  Huu Tiep Lake"
    ]
  },
  {
    url: require("../../images/city.jpg"),
    tourName: "Hanoi free city Tour",
    time: "Full day",
    description: [
      "Old quarter introduction",
      "76 Hang Buom",
      "Đồng Xuân Market",
      "Ho Chi Minh Complex: Mausoleum, Museum, President",
      "Temple of Literature",
      "Hoa Lo prison",
      "St. Jose Cathedral, Cong Coffee"
    ]
  },
  {
    url: require("../../images/tg5.jpg"),
    tourName: "Hanoi street food Tour experience",
    time: "3h",
    description: [
      "Sword Lake",
      "Old quarter introduction",
      "76 Hang Buom",
      "Đồng Xuân Market",
      "Ca Tru Singing (at Ancient house:87 Ma May/ 28 Hang Buom)",
      "Long Biên Bridge",
      "The house No48, Hang Ngang street",
      "Hanoi Ceramic Mosaic Mural"
    ]
  },
  {
    url: require("../../images/tg4.jpg"),
    tourName: "Hanoi museum Tour",
    time: "Half day - 3h",
    description: [
      "Sword Lake",
      "Old quarter introduction",
      "76 Hang Buom",
      "Đồng Xuân Market",
      "Ca Tru Singing (at Ancient house:87 Ma May/ 28 Hang Buom)",
      "Long Biên Bridge",
      "The house No48, Hang Ngang street",
      "Hanoi Ceramic Mosaic Mural"
    ]
  }
];
