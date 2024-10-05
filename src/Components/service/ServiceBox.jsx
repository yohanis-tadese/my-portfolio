import React from "react";

const ServiceBox = ({ icon, title, description, color }) => {
  return (
    <div
      className={`dotted-border-two p-3 rounded-lg transition-transform duration-300 transform  hover:scale-105 hover:shadow-lg hover:bg-gray-50`}
    >
      <div className={`text-3xl ${color} mb-4`}>{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceBox;
