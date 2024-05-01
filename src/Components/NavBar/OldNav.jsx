import { useState } from "react";
import "./navbar.scss";
import logo from "/public/img/logo.svg";
import menu from "/public/img/menu.png";

function Navbar() {
  const [open, setOpen] = useState();
  return (
    <>
      <nav>
        <div className="leftside">
          <img src={logo} alt="" />
        </div>
        <div className="rightside">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/skills">Skills</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
            <div className="menu">
              <img src={menu} alt="" onClick={() => setOpen((prev) => !prev)} />
            </div>
          </ul>
        </div>
      </nav>
      <div className={open ? "menu-list" : "menu-not-active"}>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
