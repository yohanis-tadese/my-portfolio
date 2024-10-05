import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ResumeItem = ({ date, title, description, link, linkText }) => {
  return (
    <div className="dotted-border">
      <p className="text-sm mt-1 font-medium text-textroyalBlue">{date}</p>
      <h3 className="flex mt-2 gap-1 font-medium text-lg  font-titleFont">
        {title}
      </h3>
      <ul className="mt-3 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "14px" }}>
            {description}{" "}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#2196c0",
                fontFamily: "var(--font-base0)",
              }}
            >
              {linkText}
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ResumeItem;
