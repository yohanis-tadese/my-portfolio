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
            During my time at Haramaya University's Information System
            Department, I developed diverse applications Internship Placement
            System for my final year project. Collaborating closely with
            students and company, I honed my skills in application development,
            problem-solving, and teamwork. This hands-on experience laid a
            robust foundation for my career in information systems.
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
          Under Jonas Schmedtmann's tutelage on Udemy, I delved into full-stack
          app development. Courses like "Wild Oasis Tour Guidance" honed my UI
          design and backend skills. His guidance boosted my confidence,
          equipping me for varied web dev challenges.
        </li>
      </ul>
    </motion.div>
  );
};

export default Experience;
