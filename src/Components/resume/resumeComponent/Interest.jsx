import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Interest = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Write Clean Code
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "14px" }}>
            Passionate about coding, I love solving complex problems and
            crafting elegant solutions. From diving into algorithms to
            architecting robust software systems, I thrive on coding challenges.
            Continuously expanding my knowledge, I see coding as both a
            profession and a lifelong learning journey.
          </span>
        </li>
      </ul>
      <br />
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Reading and Enjoy{" "}
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "14px" }}>
            In my spare time, I dive into technical documentation for various
            tech stacks, libraries, and frameworks. I love mentoring aspiring
            developers and sharing insights on web development. Outside of
            coding, I enjoy evening strolls, morning runs, and quality time with
            friends.
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Interest;
