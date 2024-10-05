import { motion } from "framer-motion";
import ResumeItem from "../ResumeItem";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <ResumeItem
        date="June 2020 - 2024"
        title="Haramaya University, Ethiopia"
        description="(BSIS) A Bachelor of Science in Information Systems"
        link="https://www.udemy.com/user/jonasschmedtmann/"
        // linkText="See tempo Document"
      />
      <br />
      <ResumeItem
        date="January 2022 - 2024"
        title="Udemy"
        description="Full-Stack Web Application Development (MERN) Stack By Instructors"
        link="https://www.udemy.com/user/jonasschmedtmann/"
        linkText="Jonas Schmedtmann"
      />
    </motion.div>
  );
};

export default Education;
