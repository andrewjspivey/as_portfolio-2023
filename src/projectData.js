import centripoint_calendar from "./assets/centripoint_calendar.png";
import calendar_django_code_snap from "./assets/calendar_django_code_snap.png";
import calendar_redux_code from "./assets/calendar_redux_code.png";
import calendar_react_code from "./assets/calendar_react_code.png";
import ebrecord from "./assets/ebrecord.png";
import teacherClassDash from "./assets/teacherClassDash.png";
import EBR_blog_pic from "./assets/EBR_blog_pic.png";
import unfinished_drill from "./assets/unfinished_drill.png";
import finished_drill from "./assets/finished_drill.png";
import Chart from "./assets/Chart.png";
import Tutorial_drill from "./assets/Tutorial_drill.png";
import giphy_pic_1 from "./assets/giphy_pic_1.png";
import anime_pic_1 from "./assets/anime_pic_1.png";
import anime_code_1 from "./assets/anime_code_1.png";
import anime_code_2 from "./assets/anime_code_2.png";
import newbestfriend from "./assets/newbestfriend.png";

export const projectData = {
  workProjectOne: {
    title: "Software Engineer",
    preposition: "@",
    company: "Giorgi Enterprises",
    date: "Jan 2023 - Present",
    tech: "React Native, Typescript, Flask, Python",
    description: {
      first:
        "Led development of Genius Drills, a mobile application built for a math education company serving thousands of students, teachers, and administrators with K-12 math drills. Wrote over 90% of the entire codebase.",
      second:
        "Architected API models, endpoints, and services using Flask, securely managing user and class data, drill generation, scoring, results and charts tailored to the client’s security, performance, and scalability needs.",
      third:
        "Built interactive dashboards, visualizations, and tutorials with React Native and Typescript, providing teachers with real-time insights into student performance and offering students engaging and clear drill experiences.",
      fourth:
        "Developed classwork drill assignments using web sockets, enabling live monitoring and control for teachers.",
      fifth: "Optimized performance by leveraging React Query’s caching strategies, reducing unnecessary API calls by 95%.",
      sixth: "Wrote and maintained 300+ unit tests with Jest and Pytest, reducing reported bugs and increasing app reliability.",
    },
    images: [
      teacherClassDash,
      unfinished_drill,
      finished_drill,
      Chart,
      Tutorial_drill
    ],
  },
  workProjectTwo: {
    title: "React Developer",
    preposition: "@",
    company: "Bitwise Industries",
    date: "June 2021 - Jan 2023",
    tech: "React, Redux, Django (DRF), SCSS",
    description: {
      first:
        "Worked as a contributing member of a professional software development team focusing on client projects - React, Django REST Framework, SCSS",
      second:
        "Developed high priority features for client's service scheduling app, including a full calendars of events for schedulers and coaches/transporters, as well as attendance and survey dashboards (CRUD) and more",
      third:
        "Demonstrated strong proficiency in React.js, TypeScript, Redux Toolkit, and Django (Python) in a professional development setting",
      fourth:
        "Worked in agile team, utilizing scrum methodologies and strong Git/Github version control practices",
      fifth:
        "Acquired new tools/tech such as TypeScript, and Django ORM quickly.",
      sixth: "Tested and fixed many high priority bugs/issues.",
    },
    images: [
      centripoint_calendar,
      calendar_django_code_snap,
      calendar_redux_code,
      calendar_react_code,
    ],
  },
  workProjectThree: {
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
