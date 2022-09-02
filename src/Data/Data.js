// Sidebar imports
import {
  UilClipboardAlt,
  UilSmile,
  UilAnalysis,
  UilComment,
  UilBright,
  UilBox,
  UilBug,
  UilDumbbell,
  UilCrockery,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilBox,
    heading: "Dashboard",
  },
  {
    icon: UilSmile,
    heading: "Personal Info",
  },
  {
    icon: UilAnalysis,
    heading: "Analytics",
  },
  {
    icon: UilComment,
    heading: 'Messages'
  },
  {
    icon: UilBug,
    heading: 'Report'
  },
  {
    icon: UilBright,
    heading: 'Settings'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Spendings",
    color: {
      backGround: "#202528",
      boxShadow:"0px 13px 20px 0px #80808029",
    },
    barValue: 81,
    value: "$4,024 / $5000",
    png: UilUsdSquare,
    series: [
      {
        name: "Spendings",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Total Steps",
    color: {
      backGround: "#202528",
      boxShadow: "0px 13px 20px 0px #80808029",
    },
    barValue: 100,
    value: "10,069 Steps",
    png: UilDumbbell,
    series: [
      {
        name: "Steps",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Total Calories",
    color: {
      backGround: "#202528",
      boxShadow: "0px 13px 20px 0px #80808029",
    },
    barValue: 50,
    value: "1,240 Cal",
    png: UilCrockery,
    series: [
      {
        name: "Calories",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Tate",
    noti: "has ordered Tesla Model X.",
    time: "25 seconds ago",
  },
  {
    img: img1,
    name: "Andrew Tate",
    noti: "has received Bugatti Chiron",
    time: "30 minutes ago",
  },
];
