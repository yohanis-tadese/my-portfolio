import React from "react";

const CertificateCard = ({ src }) => {
  return (
    <div className="w-80 bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg">
      <img src={src} alt="Certificate" className="w-full h-auto rounded-lg" />
    </div>
  );
};

export default CertificateCard;
