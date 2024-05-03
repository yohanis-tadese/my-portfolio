import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">Udemy</h3>
      <p className="text-sm mt-1 font-medium text-textroyalBlue">
        Jan 2022 - Dec 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Forkify: Mastered JavaScript and ES6 by crafting a recipe search app
          with Fetch API, featuring search functionality and recipe bookmarking.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Natours: Mastered modern CSS techniques, including animations and
          responsive design, while building a dynamic tour booking website with
          Node.js, MongoDB, and React.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          ABE Garage Project: Utilizing MERN stack (MongoDB, Express.js,
          React.js, Node.js) for a robust and dynamic automotive workshop
          management system.
        </li>
      </ul>
    </motion.div>
  );
};

export default Project;
