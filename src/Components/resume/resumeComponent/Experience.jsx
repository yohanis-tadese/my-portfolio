import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        From Haramaya University | CCI College
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1 text-textroyalBlue">
              <FaArrowAltCircleRight />
            </span>
            <span style={{ fontSize: "14px" }}>
              During my tenure at Haramaya University's Information System
              Department, I spearheaded the development of various applications,
              including Internship Placement System for my final year project.
              Through close collaboration with fellow students and industry
              partners, I refined my skills in application development,
              problem-solving, and teamwork. This hands-on experience laid a
              solid foundation for my career in information systems.
            </span>
          </li>
        </li>
      </ul>
      <br />
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        From Udemy By Instructor Jonas Schmedtmann
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "14px" }}>
            Under the mentorship of Jonas Schmedtmann on Udemy, I developed
            natours application, a project aimed at honing my skills in both
            frontend and backend development. His guidance not only boosted my
            confidence but also equipped me to overcome diverse challenges in
            the realm of web development.
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Experience;
