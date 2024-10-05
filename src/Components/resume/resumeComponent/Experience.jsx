import { motion } from "framer-motion";
import ResumeItem from "../ResumeItem";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <ResumeItem
        date="Jul 2024 - October 2024"
        title="Alpha World Technology"
        description="As a backend developer at Alpha World Technology, I created server-side applications using Node.js and Express, managed databases with MySQL and Sequelize, and implemented RESTful APIs. My role involved optimizing CRUD operations, ensuring secure user authentication, and enhancing database query performance."
      />

      <ResumeItem
        date="June 2023 - August 2023"
        title="Internship at Humboldt Public Library"
        description="During my internship at Humboldt Public Library, I developed a comprehensive library management system using the MERN stack. I designed and implemented features for catalog management, including CRUD operations for books, authors, and genres. I created a user-friendly interface for searching and borrowing books, integrated authentication and authorization for various user roles, and built an administrative dashboard for managing inventory and tracking book loans."
      />
      <ResumeItem
        date="December 2020 - 2024"
        title="From Haramaya University | CCI College"
        description="During my tenure at Haramaya University's Information System Department, I spearheaded the development of various applications, including Internship Placement System for my final year project. Through close collaboration with fellow students and industry partners, I refined my skills in application development, problem-solving, and teamwork. This hands-on experience laid a solid foundation for my career in information systems."
      />
      <ResumeItem
        date="September 2022 - 2024"
        title="From Udemy By Instructor Jonas Schmedtmann"
        description="Under the mentorship of Jonas Schmedtmann on Udemy, I developed the natours application, a project aimed at honing my skills in both frontend and backend development. His guidance not only boosted my confidence but also equipped me to overcome diverse challenges in the realm of web development."
      />
    </motion.div>
  );
};

export default Experience;
