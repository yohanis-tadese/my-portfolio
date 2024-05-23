import React from "react";
import "./footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      &copy; {currentYear} All Rights Reserved | Yohanis Tadese
    </div>
  );
};

export default Footer;
