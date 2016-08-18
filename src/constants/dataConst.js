/**
 * Created by Chris Ho on 7/26/2016.
 */
import React from 'react';
export const COUNTRY_DATA = [
  "Afghanistan",
  "Aland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bonaire, Saint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, The Democratic Republic of the",
  "Cook Islands",
  "Costa Rica",
  "Cote d’Ivoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (Vatican City State)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran, Islamic Republic of",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People’s Republic of",
  "Korea, Republic of",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People’s Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libyan Arab Jamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territory",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Barthelemy",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Virgin Islands, British",
  "Virgin Islands, U.S.",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Other"
];

export const DATA_COMPANY_SIZE = [
  "1-9 people",
  "10-29 people",
  "30-99 people",
  "100-299 people",
  "1,000-2,999 people",
  "3,000-9,999 people",
  "10,000-29,999 people",
  "30,000-99,999 people",
  "100,000 or more people"
];

export const DATA_PRICING = [
  {
    header: "SCREEN",
    description: "Screen for culture fit",
    modules: [
      {type: "FLOW Motivator Report"},
      {type: ""},
      {type: ""},
      {type: ""},
      {type: "Support & training", content: ["Support pack for HR"]}
    ],
    price: 99
  },
  {
    header: "ENGAGE",
    description: "Boost employee engagement",
    modules: [
      {type: "FLOW Motivator Report"},
      {type: "FLOW Engagement Report"},
      {type: ""},
      {type: ""},
      {type: "Support & training", content: ["Support pack for HR/line managers","10 hours of implementation support"]}
    ],
    price: 199
  },
  {
    header: "TEAM",
    description: "Boost, benchmark and predict employee engagement",
    modules: [
      {type: "FLOW Motivator Report"},
      {type: "FLOW Engagement Report"},
      {type: "FLOW Culture Report"},
      {type: ""},
      {type: "Support & training", content: ["Support pack for HR/line managers",
        "20 hours of implementation support","Superuser training for HR"]}
    ],
    price: 299
  },
  {
    header: "ENTERPRISE",
    description: "Boost, benchmark and predict employee engagement and assess culture fit with custom algorithms",
    modules: [
      {type: "FLOW Motivator Report"},
      {type: "FLOW Engagement Report"},
      {type: "FLOW Culture Report"},
      {type: "FLOW Custom Reports"},
      {type: "Support & training", content: ["Support pack for HR/line managers",
        "Continuous support in business hours","Superuser training for HR/managers"]}
    ],
    price: 399
  }
];

export const DATE_FEATURES = [
  {
    urlImg: require("../images/flow-chart1.svg"),
    headline: "Proprietary psychological tests",
    content: "FLOW is powered by two proprietary psychological tests, " +
    "the FLOW Motivator Survey and the FLOW Engagement Survey. " +
    "Both tests were developed by a team of workplace psychologists and " +
    "statisticians in a rigorous, scientific process. " +
    "The FLOW Motivator Survey measures people's intrinsic motivators, " +
    "while the FLOW Engagement Survey measures the extent to which " +
    "these motivators can be realized in people's work environments."
  },
  {
    urlImg: require("../images/flow-chart2.svg"),
    headline: "Benchmarked, actionable reports",
    content: "FLOW gives you access to both individual and company-level reports. " +
    "Reports are highly actionable, with specific, prioritized recommendations " +
    "for follow-up measures that help you make the most of your engagement initiatives. " +
    "In addition, all of the data in the reports is standardized and benchmarked, " +
    "so you can see how your company compares to other employers."
  },
  {
    urlImg: require("../images/flow-chart3.svg"),
    headline: "Predictive analytics",
    content: "FLOW's predictive algorithms will help you to objectively and analytically " +
    "assess culture fit in your hiring process, to identify the measures that will " +
    "most effectively improve employee engagement, and to forecast and prevent unwanted turnover."
  }
];

export const DATA_ADDRESS = [
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

export const INTRO_DATA = [
  {
    icon: <i className="fa fa-puzzle-piece fa-3x" aria-hidden="true" />,
    headLine: "SCREEN FOR CULTURE FIT",
    content: "Startups need people who will walk the extra mile every day to make the company a success. " +
    "FLOW helps you identify the candidates who are most likely to thrive in and enrich your culture."
  },
  {
    icon: <i className="fa fa-line-chart fa-3x" aria-hidden="true" />,
    headLine: "IMPROVE ENGAGEMENT",
    content: "FLOW is the only tool that measures both your people's motivators and their engagement. " +
    "This way you can focus on the metrics that matter, " +
    "meaningfully improving engagement without wasting valuable resources."
  },
  {
    icon: <i className="fa fa-life-ring fa-3x" aria-hidden="true" />,
    headLine: "PREVENT UNWANTED TURNOVER",
    content: "Retaining your best people is the key to creating a scalable culture. " +
    "FLOW's predictive algorithms help you forecast attrition risk and identify " +
    "the most effective preventive measures. "
  }
];
