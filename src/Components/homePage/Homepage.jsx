import React, { useEffect } from "react";
import "./homepage.scss";
import { Link } from "react-scroll";
import TypingSVG from "./TypingSVG";

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
        <span style={{ color: "#0794c9", fontWeight: "770" }}>
          Hello, my name is
        </span>
        <h4>Yohanis Tadese.</h4>
        <h4>
          {" "}
          <TypingSVG />
        </h4>
        <h3>
          I'm a passionate and dedicated full-stack (MERN) software developer
          driven by a passion for crafting impactful digital solutions. My
          strength lies in creating user-friendly interfaces and robust backend
          systems that elevate the user experience.
        </h3>

        <div className="buttons">
          <button className="btn button-one">
            <a
              href="https://drive.google.com/file/d/1hPicWaxKUkfYPUGryv3lPRuL6o06YOPc/view?usp=drive_link"
              target="_blank"
              download="Yohanis_Tadese_CV.pdf"
            >
              Download CV
            </a>
          </button>

          <button className="btn button-two">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              My Work
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
