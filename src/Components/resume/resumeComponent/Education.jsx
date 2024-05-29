import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Haramaya University, Ethiopia
      </h3>
      <p className="text-sm mt-1 font-medium text-textroyalBlue">
        June 2020 - 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "15px" }}>
            A Bachelor of Science in Information Systems (BSIS) involves the
            study of technology and its application in managing information for
            businesses and organizations.
          </span>
        </li>
      </ul>

      <br />
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">Udemy</h3>
      <p className="text-sm mt-1 font-medium text-textroyalBlue">
        January 2022 - 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "15px" }}>
            Full-Stack Web Application Development (MERN) Stack By Instructors
            👉{" "}
            <a
              href="https://www.udemy.com/user/jonasschmedtmann/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#2196c0" }}
            >
              Jonas Schmedtmann
            </a>
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Education;
