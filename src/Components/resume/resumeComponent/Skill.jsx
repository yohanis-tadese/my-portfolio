import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Technical Skills
      </h3>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span className="text-textroyalBlue"> Frontend:</span> HTML | CSS |
          JavaScript | React | ECMAScript (ES6+) | Tailwind CSS | Bootstrap |
          SCSS
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span className="text-textroyalBlue"> Backend:</span> Node.js |
          Express.js | REST API
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span className="text-textroyalBlue">Database</span> MongoDB | MySQL |
          SQL
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span className="text-textroyalBlue"> Tools & Deployment:</span> Figma
          | Git | Vercel | AWS | Heroku
        </li>
      </ul>
    </motion.div>
  );
};

export default Skill;
