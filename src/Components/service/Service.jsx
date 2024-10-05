import React from "react";
import SectionTitle from "../SectionTitle";
import ServiceBox from "./ServiceBox";
import serviceData from "../../assets/data/serviceData";

const Service = () => {
  return (
    <div id="Service" className="py-16 md:px-8 lg:px-16 bg-white">
      <div className="mb-12 text-center">
        <SectionTitle title="Core Services" />
      </div>

      {/* Services Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-8 px-6 lg:px-10 md:px-4">
        {/* Render Each ServiceBox */}
        {serviceData.map((service, index) => (
          <ServiceBox
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            color={service.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
