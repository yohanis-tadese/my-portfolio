import { motion } from "framer-motion";
import InterestItem from "../ResumeItem";

const Interest = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <InterestItem
        title="Write Clean Code"
        description="Passionate about coding, I love solving complex problems and crafting elegant solutions. From diving into algorithms to architecting robust software systems, I thrive on coding challenges. Continuously expanding my knowledge, I see coding as both a profession and a lifelong learning journey."
      />
      <br />
      <InterestItem
        title="Reading and Enjoy"
        description="In my spare time, I dive into technical documentation for various tech stacks, libraries, and frameworks. I love mentoring aspiring developers and sharing insights on web development. Outside of coding, I enjoy evening strolls, morning runs, and quality time with friends."
      />
    </motion.div>
  );
};

export default Interest;
