import centripoint_calendar from "./assets/centripoint_calendar.png";
import calendar_django_code_snap from "./assets/calendar_django_code_snap.png";
import calendar_django_code_2 from "./assets/calendar_django_code_2.png";
import calendar_react_codesnippet from "./assets/calendar_react_codesnippet.png";
import ebrecord from "./assets/ebrecord.png";
import royal_bay from "./assets/royal_bay.png";

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
        "Developed and implemented valuable features including a calendar of events for schedulers and coaches/transporters, as well as attendance and survey dashboards (CRUD)",
      third:
        "Demonstrated strong proficiency in React.js, TypeScript, Redux Toolkit, and Django (Python) in a professional development setting",
      fourth:
        "Worked in agile team, utilizing scrum methodologies and strong Git/Github version control practices",
      fifth:
        "Acquired new tools/tech such as TypeScript, and Django ORM quickly.",
      sixth: "Tested and fixed many pre-existing bugs requested by client",
    },
    images: [
      centripoint_calendar,
      calendar_django_code_snap,
      calendar_django_code_2,
      calendar_react_codesnippet,
    ],
  },
  workProjectTwo: {
    title: "Lead Developer",
    preposition: "for",
    company: "East Bay Recorders",
    date: "Nov 2021 - Jan 2022",
    tech: "React, styled-components",
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
    images: [ebrecord],
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
    images: [royal_bay],
  },
};
