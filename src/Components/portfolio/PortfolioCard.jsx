import React, { useState } from "react";
import Modal from "./Modal";

const PortfolioCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div
        className="flex flex-col gap-6"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          padding: "20px",
          background: "#F5F8FD",
        }}
      >
        <a
          className="relative group"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-xl md:text-lg font-bold text-gray-800 tracking-wide mb-2 transition-transform duration-300 uppercase">
            {project.title}
          </h3>
          <div className="image-container">
            <span className="image-overlay"></span>
            <img
              className="w-48 h-32 object-cover rounded-md transition-transform duration-300"
              src={project.imageBanner}
              alt={project.title}
            />

            <div className="absolute w-full h-full bg-textBlack/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>

        <div className="flex flex-col gap-4">
          <div className="text-sm flex gap-4 mt-2">
            <a
              className="px-1 py-1 border border-dotted border-[#2D9386] rounded-md hover:bg-[#2D9386] transition duration-300 ease-in-out"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <button
              className="w-30 px-2 py-1 border border-dotted border-[#2D9386]  rounded-md hover:bg-[#2D9386] transition duration-300 ease-in-out"
              onClick={toggleModal}
            >
              See Detail
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={toggleModal} project={project} />
    </>
  );
};

export default PortfolioCard;
