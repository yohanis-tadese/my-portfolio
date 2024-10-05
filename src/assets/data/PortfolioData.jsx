import { intern } from "../assets";
import Travel from "../../assets/images/travelList.jpg";
import abegarage from "../../assets/images/abegarage.jpg";
import Bankist from "../../assets/images/bankist.jpg";
import natours from "../../assets/images/natours.jpg";

const projects = [
  {
    title: "Internship Placement System",
    shortDescription: "Students matched with companies via algorithms.",
    description:
      "Developed an Internship Placement System where students are assigned to companies by using an algorithm. This platform simplifies the internship application process for students and enhances the ability of companies to find suitable candidates. Students can view their assigned company placements and relevant details, facilitating better preparation for their internships.",
    details: [
      "Advanced algorithms match students with companies based on skills, preferences, and requirements.",
      "Students can view assigned placements, including job descriptions, application status, and contact information.",
      "Companies provide feedback on student performance, supporting personal and professional development.",
      "Universities can monitor placements and engagement metrics for better oversight of student-company partnerships.",
      "The system facilitates effective communication between students and companies to address queries during internships.",
    ],

    images: [
      {
        title: "User Login Page",
        src: intern.Intern_login_page,
        description:
          "This section features the User Login Portal, designed for easy and secure access to user accounts. The intuitive interface allows users to enter their credentials effortlessly, ensuring a smooth entry into their personalized dashboard where they can track their internship status and related notifications.",
      },
      {
        title: "Admin Dashboard",
        src: intern.Intern_admin_dash,
        description:
          "Admin dashboard for managing student and company data, tracking applications, and generating reports based on current placements. Administrators can efficiently oversee the entire process and ensure that students are appropriately matched with companies.",
      },
      {
        title: "Student Profile Page",
        src: intern.Intern_user_dash,
        description:
          "Student profile page showing personal details, assigned internship information, and relevant notifications. This section helps students to stay informed about important dates, company contacts, and feedback received from companies.",
      },
      {
        title: "Company Portal",
        src: intern.Intern_comp_dash,
        description:
          "Company portal where HR managers can view student profiles, select potential candidates based on their qualifications and preferences, and track placement statuses. This feature streamlines the hiring process for companies looking for interns.",
      },
      {
        title: "Department Dashboard",
        src: intern.Intern_dep_dash,
        description:
          "Department dashboard for tracking internship placements and student engagement with companies. This section provides valuable insights into placement statistics, trends, and overall engagement, helping universities improve their internship programs.",
      },
    ],
    guidance:
      "To get started, clone the repository and run `npm install` for both frontend and backend directories. Set up your environment variables for the database and authentication. Start the development server using `npm start` for the frontend. For the backend, run the server with `node server.js`. Ensure that MySQL is configured correctly and all necessary tables are created. Refer to the README for detailed setup instructions.",
    technologies: ["ReactJs", "Styled-CSS", "NodeJs", "ExpressJs", "MySql"],
    imageBanner: intern.Intern_admin_dash,
    github: "https://github.com/yohanis-tadese/Internship-placement-system",
    link: "https://github.com/yohanis-tadese/Internship-placement-system",
    reverse: false,
  },
  {
    title: "Traveler Pack Easily",
    shortDescription: "Simplify your travel packing process.",
    description:
      "Create your travel list effortlessly! Note what you can't leave behind and quantity. Tick off as you pack. Easily track essentials. Remove what you don't need. Simplify your packing process!",
    details: [
      "Create a personalized travel checklist.",
      "Easily manage items by adding quantities.",
      "Check off items as you pack.",
      "Remove unnecessary items with ease.",
    ],
    images: [
      {
        title: "Travel Packing Interface",
        src: Travel,
        description:
          "This interface allows users to create and manage their travel packing lists, ensuring they never forget essential items while traveling.",
      },
    ],
    guidance:
      "To get started, clone the repository and run `npm install`. Start the application using `npm start`. The app is hosted on Netlify for easy access.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    imageBanner: Travel,
    github: "https://github.com/Jhontadese/react-travel-list",
    link: "https://yohanis-packed-travel-ready.netlify.app/",
    reverse: true,
  },
  {
    title: "Abe Garage",
    shortDescription: "Streamline garage management with modern technology.",
    description:
      "Abe garage management system designed to streamline operations and enhance efficiency, built using modern technologies such as React.js for the frontend and Node.js with MySQL for the backend.",
    details: [
      "Manage garage operations efficiently.",
      "User authentication with JWT.",
      "Data management using MySQL.",
      "Responsive frontend built with ReactJS.",
    ],
    images: [
      {
        title: "Abe Garage Dashboard",
        src: abegarage,
        description:
          "The Abe Garage dashboard provides an intuitive interface for managing garage operations, including user authentication and data management.",
      },
    ],
    guidance:
      "To get started, clone the repository and run `npm install` in both the frontend and backend directories. Use `npm start` to launch the frontend and `node server.js` for the backend. Ensure MySQL is properly configured.",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "JWT", "MySQL"],
    imageBanner: abegarage,
    github: "https://github.com/yohanis-tadese/abe-garage",
    link: "https://github.com/yohanis-tadese/abe-garage",
    reverse: false,
  },
  {
    title: "Bankist Application",
    shortDescription:
      "Fictional online bank project for practicing DOM manipulation.",
    description:
      "Bankist is a fictional online bank. It is a project introduced by Jonas Schmedtmann to practice DOM manipulation and user interaction. Bankist has the option to log in to the account and use different functionalities, almost like in an actual bank.",
    details: [
      "Log in to user accounts for access to banking features.",
      "View account balances and transactions.",
      "Transfer money between accounts seamlessly.",
      "User-friendly interface demonstrating DOM manipulation skills.",
    ],
    images: [
      {
        title: "Bankist Dashboard",
        src: Bankist,
        description:
          "The Bankist dashboard allows users to manage their accounts efficiently, providing an overview of balances and recent transactions.",
      },
    ],
    guidance:
      "To get started, clone the repository and run `npm install` to install the necessary packages. Open the HTML file in your browser to view the application. No backend is required for this project.",
    technologies: ["HTML", "CSS", "Javascript"],
    imageBanner: Bankist,
    github: "https://github.com/yohanis-tadese/bankist-site",
    link: "https://yohanis-bank-site.netlify.app/",
    reverse: true,
  },
  {
    title: "Natours Tour and Travel",
    shortDescription:
      "A tour booking application with seamless payment integration.",
    description:
      "An outstanding tour booking web application built with Node.js, Express, and MongoDB, featuring a seamless payment system through Stripe for enhanced user experience.",
    details: [
      "Browse and book various tours.",
      "Seamless payment processing through Stripe.",
      "User registration and authentication with JWT.",
      "Manage bookings and view trip details.",
    ],
    images: [
      {
        title: "Natours Booking Page",
        src: natours,
        description:
          "The Natours booking page provides an intuitive interface for users to explore and book tours, enhancing their travel experience.",
      },
    ],
    guidance:
      "To get started, clone the repository and run `npm install` for the backend. Configure environment variables for database access, then start the server with `node server.js`. The frontend can be accessed via the built files.",
    technologies: ["NodeJs", "Express", "MongoDB", "Mailtrap", "Stripe", "JWT"],
    imageBanner: natours,
    github: "https://github.com/yohanis-tadese/natours",
    link: "https://github.com/yohanis-tadese/natours",
    reverse: false,
  },
];

export default projects;
