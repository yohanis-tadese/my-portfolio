import React, { useState } from "react";
import ProjectCard from "./PortfolioCard";
import SectionTitle from "../SectionTitle";
import projects from "../../assets/data/PortfolioData";
import "./portfolio.scss";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      id="Project"
      className="Myportfolio max-w-container mx-auto lgl:px-20 py-24"
    >
      <div className="portfolio-title">
        <SectionTitle title="Some Things I Have Built" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects
          .slice(0, showMore ? projects.length : 3)
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>

      <div className="show-more-less w-32  flex items-center justify-center mt-6">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-full h-12 rounded-md text-textBlack text-[13px] border border-textBlack duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-full h-12 rounded-md text-textBlack text-[13px] border border-textBlack duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
