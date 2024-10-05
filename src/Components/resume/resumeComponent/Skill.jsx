import { motion } from "framer-motion";
import SkillItem from "../ResumeItem";

const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <ul className="mt-3 flex flex-col gap-3">
        <SkillItem
          title="Frontend"
          description="HTML | CSS | JavaScript | ECMAScript (ES6+) | React | Next.js"
        />
        <SkillItem
          title="CSS Frameworks & Preprocessors"
          description="Tailwind CSS | Bootstrap | SCSS | SASS | Material-UI | Styled-components"
        />
        <SkillItem
          title="Backend"
          description="Node.js | Express.js | REST API"
        />
        <SkillItem title="Database" description="MongoDB | MySQL | SQL" />
        <SkillItem
          title="Tools & Deployment"
          description="Figma | Git | Vercel | AWS | Heroku"
        />
      </ul>
    </motion.div>
  );
};

export default Skill;
