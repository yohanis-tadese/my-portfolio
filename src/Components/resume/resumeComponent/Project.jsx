import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Projects I Developed During University
      </h3>
      <p className="text-sm mt-1 font-medium text-textroyalBlue">
        Jan 2022 - Dec 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1  text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>

          <span style={{ fontSize: "14px" }}>
            Internship Placement System: Utilizing Full stack (MySQL,
            Express.js, React.js, Node.js) based projects for a robust and
            dynamic internship portal for haramaya university.
          </span>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1  text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "14px" }}>
            Natours: Mastered modern CSS techniques, including animations and
            responsive design, while building a dynamic tour booking website
            with Node.js, MongoDB, and React.
          </span>
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1  text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "14px" }}>
            Abe Garage Project: Utilizing MERN stack (MySQL, Express.js,
            React.js, Node.js) for a robust and dynamic automotive workshop
            management system.
          </span>
        </li>
        <li className="text-base flex gap-2 text-dark">
          <span className="text-green mt-1 text-royalBlue  text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "14px" }}>
            Personal Portfolio Website: Designed and developed a personal
            portfolio website showcasing skills, projects and experiences using
            React.js and SASS. Implemented dynamic animations, responsive design
            and seamless user experience.
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Project;
