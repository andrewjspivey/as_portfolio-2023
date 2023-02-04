import centripoint_calendar from "./assets/centripoint_calendar.png";
import calendar_django_code_snap from "./assets/calendar_django_code_snap.png";
import calendar_redux_code from "./assets/calendar_redux_code.png";
import calendar_react_code from "./assets/calendar_react_code.png";
import ebrecord from "./assets/ebrecord.png";
import royal_bay from "./assets/royal_bay.png";
import EBR_blog_pic from "./assets/EBR_blog_pic.png";
import royal_code_2 from "./assets/royal_code_2.png";
import royal_code_snip_1 from "./assets/royal_code_snip_1.png";
import royal_sql_code from "./assets/royal_sql_code.png";
import giphy_pic_1 from "./assets/giphy_pic_1.png";
import anime_pic_1 from "./assets/anime_pic_1.png";
import anime_code_1 from "./assets/anime_code_1.png";
import anime_code_2 from "./assets/anime_code_2.png";
import newbestfriend from "./assets/newbestfriend.png";

export const projectData = {
  workProjectOne: {
    title: "Software Developer Apprentice",
    preposition: "@",
    company: "Bitwise Industries",
    date: "June 2021 - Jan 2023",
    tech: "React, Redux, Django (DRF), SCSS",
    description: {
      first:
        "Worked as a contributing member of a professional software development team focusing on client projects - React, Django REST Framework, SCSS",
      second:
        "Worked in agile team, utilizing scrum methodologies and strong Git/Github version control practices",
      third:
        "Demonstrated strong proficiency in React.js, TypeScript, Redux Toolkit, and Django (Python) in a professional development setting",
      fourth:
        "Developed and implemented valuable features including a calendar of events for schedulers and coaches/transporters, as well as attendance and survey dashboards (CRUD) and more",
      fifth:
        "Acquired new tools/tech such as TypeScript, and Django ORM quickly.",
      sixth: "Tested and fixed many pre-existing bugs requested by client",
    },
    images: [
      centripoint_calendar,
      calendar_django_code_snap,
      calendar_redux_code,
      calendar_react_code,
    ],
  },
  workProjectTwo: {
    title: "Lead Developer",
    preposition: "for",
    company: "East Bay Recorders",
    date: "Nov 2021 - Jan 2022",
    tech: "React, styled-components",
    links: {
      live: "https://eastbayrecorders.com/",
      github: "https://github.com/andrewjspivey/eastbay_recorders",
    },
    description: {
      first:
        "A React.js web app built for recording company and studio, East Bay Recorders",
      second:
        "Designed and developed website using React.js and styled-components",
      third:
        "Architected and implemented front-end, functionality, routing, and data",
      fourth:
        "Applied mobile responsiveness to ensure optimal viewing on all devices",
      fifth:
        "Led a team of three developers to complete the website in 1 month",
      sixth:
        "Conducted thorough testing and debugging to ensure website stability and functionality",
    },
    images: [ebrecord, EBR_blog_pic],
  },
  workProjectThree: {
    title: "Developed ETL Program",
    preposition: "for",
    company: "Royal Ambulance",
    date: "March 2021 - Jun 2021",
    tech: "JavaScript, Node.js, MSSQL",
    description: {
      first:
        "Created an ETL program using JavaScript, Node.js, and Microsoft SQL Server for an ambulance company to gain employee data and improve data accuracy on EMT employees",
      second:
        "Implemented data extraction from eso-suite schedule API, transformed data, and loaded to company's MSSQL Server DB",
      third:
        "Utilized JavaScript, Node.js, and MSSQL Server to automate the ETL processes and integration with the company's existing database",
      fourth:
        "Implemented security measures to protect sensitive employee data",
      fifth: "Improved EMT push out times and accuracy",
      sixth:
        "Consulted with client throughout to complete program as sole developer in 3 months",
    },
    images: [royal_bay, royal_code_2, royal_code_snip_1, royal_sql_code],
  },
  personalProjectOne: {
    title: "Giphy App",
    preposition: "",
    company: "",
    date: "August 2021",
    tech: "JavaScript, Express.js, React.js, styled-components",
    links: {
      live: "https://aw-gif-fun.herokuapp.com/",
      github: "https://github.com/alphaworks-react-team/team-2-gif",
    },
    description: {
      first: "Led the development of a giphy.com clone using Node.js, React.js",
      second:
        "Implemented RESTful API and request handling to and from Giphy API and user ",
      third:
        "Executed styling and functionality for homepage, categories, search, navigation, pagination, gif sharing",
      fourth:
        "Led team communication and github strategy for a smooth, efficient team dynamic.",
    },
    images: [giphy_pic_1],
  },
  personalProjectTwo: {
    title: "Anime App",
    preposition: "",
    company: "",
    date: "September 2021",
    tech: "React.js, JavaScript, styled-components, APIs",
    links: {
      live:
        "https://625747d6c375552bce81c279--celadon-bombolone-40eea2.netlify.app/",
      github: "https://github.com/alphaworks-react-team/anime-team-1",
    },
    description: {
      first: "Led the development of an anime app using React.js",
      second:
        "Implemented efficient data handling methods to retrieve anime information from a third-party API.",
      third:
        "Designed user-friendly interfaces for searching and browsing, searching anime, as well as viewing details about individual series.",
      fourth:
        "Implemented infinite scrolling for searching anime categorically utilizing Intersection Observer",
    },
    images: [anime_pic_1, anime_code_1, anime_code_2],
  },
  personalProjectThree: {
    title: "New Best Friend",
    preposition: "",
    company: "",
    date: "November 2020",
    tech: "Python, Django, HTML, CSS",
    links: {
      live: "https://newbestfriend9.herokuapp.com/",
      github: "https://github.com/andrewjspivey/New_Best_Friend",
    },
    description: {
      first: "Dog adoption app built with Django during Bootcamp",
      second:
        "Executed all project design and functionality 2 months into coding journey",
      third: "Interacted with Petfinder API for up to date dog adoption data",
      fourth:
        "Utilized Django templates, HTML, CSS to style app on own and complete in 10 days",
    },
    images: [newbestfriend],
  },
};
