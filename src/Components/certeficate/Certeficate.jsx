import React from "react";
import CertificateCard from "./CerteficateCard";
import CerteficateOne from "../../assets/certeficate/certificate-1.jpg";
import CerteficateTwo from "../../assets/certeficate/certificate-2.jpg";

const cardClasses = "w-80 bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg";
const containerClasses =
  "bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-300 py-8";
const titleClasses = "text-3xl font-bold text-blue-400";
const subtitleClasses = "text-yellow-400";

const Certeficate = () => {
  return (
    <div className={containerClasses}>
      <div className="text-center mb-8">
        <h2 className={titleClasses}>Achievements & Awards</h2>
        <p className={subtitleClasses}>
          Recognitions, Awards, and Career Milestones
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <CertificateCard src={CerteficateOne} />
        <CertificateCard src={CerteficateTwo} />
        <CertificateCard src={CerteficateOne} />
      </div>
    </div>
  );
};

export default Certeficate;
