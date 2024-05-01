import React, { useEffect } from "react";
import "./homepage.scss";

function Homepage() {
  useEffect(() => {
    const handleScroll = () => {
      addActiveClassToNavLink("home");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addActiveClassToNavLink = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navLink = document.getElementById(`${sectionId}-nav-link`);

    if (!section || !navLink) return;

    const scrollPosition = window.scrollY;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  };

  return (
    <div id="home" className="homepage">
      <div className="left-side">
        <span>Hello, my name is</span>
        <h2>Yohanis Tadese.</h2>
        <h2>I build things for the web.</h2>
        <h3>
          I'm a versatile full-stack (MERN) developer driven by a passion for
          crafting impactful digital solutions. My strength lies in creating
          user-friendly interfaces and robust backend systems that elevate the
          user experience.
        </h3>
        <div className="buttons">
          <button className="btn button-one">Download CV</button>
          <button className="btn button-two">My Work</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
