import { useState } from "react";
import Skill from "./resumeComponent/Skill";
import Project from "./resumeComponent/Project";
import Experience from "./resumeComponent/Experience";
import Education from "./resumeComponent/Education";
import Interest from "./resumeComponent/Interest";
import SectionTitle from "../SectionTitle";
import "./resume.scss";

const Resume = () => {
  const [whereEducation, setwhereEducation] = useState(true);
  const [workExperience, setWorkExperience] = useState(false);
  const [workProject, setWorkProject] = useState(false);
  const [workInterest, setWorkInterest] = useState(false);
  const [workSkill, setWorkSkill] = useState(false);

  const handleEducation = () => {
    setwhereEducation(true);
    setWorkExperience(false);
    setWorkProject(false);
    setWorkInterest(false);
    setWorkSkill(false);
  };

  const handleExperience = () => {
    setwhereEducation(false);
    setWorkExperience(true);
    setWorkProject(false);
    setWorkInterest(false);
    setWorkSkill(false);
  };

  const handleProject = () => {
    setwhereEducation(false);
    setWorkExperience(false);
    setWorkProject(true);
    setWorkInterest(false);
    setWorkSkill(false);
  };
  const handleInterest = () => {
    setwhereEducation(false);
    setWorkExperience(false);
    setWorkProject(false);
    setWorkInterest(true);
    setWorkSkill(false);
  };
  const handleSkill = () => {
    setwhereEducation(false);
    setWorkExperience(false);
    setWorkProject(false);
    setWorkInterest(false);
    setWorkSkill(true);
  };
  return (
    <section id="Resume" className="Myresume ">
      <SectionTitle title="My formal Bio Details" titleNo="02" />
      <div className="resume-container w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleEducation}
            className={`${
              whereEducation
                ? "border-l-textroyalBlue text-textroyalBlue"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#DEFFFE] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Education
          </li>
          <li
            onClick={handleExperience}
            className={`${
              workExperience
                ? "border-l-textroyalBlue text-textroyalBlue"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#DEFFFE] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Experience
          </li>
          <li
            onClick={handleProject}
            className={`${
              workProject
                ? "border-l-textroyalBlue text-textroyalBlue"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#DEFFFE] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Project
          </li>

          <li
            onClick={handleSkill}
            className={`${
              workSkill
                ? "border-l-textroyalBlue text-textroyalBlue"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#DEFFFE] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Skill
          </li>

          <li
            onClick={handleInterest}
            className={`${
              workInterest
                ? "border-l-textroyalBlue text-textroyalBlue"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#DEFFFE] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Interest
          </li>
        </ul>
        {whereEducation && <Education />}
        {workExperience && <Experience />}
        {workProject && <Project />}
        {workInterest && <Interest />}
        {workSkill && <Skill />}
      </div>
    </section>
  );
};

export default Resume;
