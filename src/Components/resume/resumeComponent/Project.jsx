import { motion } from "framer-motion";
import ProjectItem from "../ResumeItem";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-lg font-titleFont">
        Projects I Developed During University
      </h3>
      <p className="text-sm mt-1 font-medium text-textroyalBlue">
        Jan 2022 - Dec 2023
      </p>
      <ul className="mt-3 flex flex-col gap-3">
        <ProjectItem
          title="Internship Placement System"
          description="Final year project that received the top rank in the university. Utilized Full stack (MySQL, Express.js, React.js, Node.js) to create a robust and dynamic internship portal for Haramaya University."
        />
        <ProjectItem
          title="Natours"
          description="Mastered backend development, including JWT authentication and payment integration, while building a dynamic tour booking website with Node.js, MongoDB, and React."
        />
        <ProjectItem
          title="Abe Garage Project"
          description="Utilizing MERN stack (MySQL, Express.js, React.js, Node.js) for a robust and dynamic automotive workshop management system."
        />
        <ProjectItem
          title="Personal Portfolio Website"
          description="Designed and developed a personal portfolio website showcasing skills, projects and experiences using React.js, Tailwind CSS and SCSS."
        />
      </ul>
    </motion.div>
  );
};

export default Project;
