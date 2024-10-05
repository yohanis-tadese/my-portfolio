import "./about.scss";
import my_image from "../../assets/core-image/profile.png";
import SectionTitle from "../SectionTitle";
import { FaArrowAltCircleRight } from "react-icons/fa";

function About() {
  return (
    <div id="About" className="about">
      <div className="portfolio-title">
        <SectionTitle title="About me" />
      </div>
      <div className="about-content">
        <div className="about-image">
          <img
            src={my_image}
            width={500}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </div>

        <div className="about-detail">
          <h3>A passionate Full-stack Developer </h3>
          <span>
            Hello! I'm Yohanis Tadese and I'm passionate about bringing ideas to
            life on the internet. my expertise lies in crafting robust and
            dynamic web applications tailored to meet diverse client needs. With
            a keen eye for detail and a passion for innovation, I excel in
            leveraging the latest tools and techniques to deliver high-quality
            solutions.
          </span>
          <span>
            My commitment to excellence drives me to continuously enhance my
            skills and stay abreast of industry trends. I thrive in
            collaborative environments where I can contribute my creativity and
            technical prowess to drive projects to success.
          </span>

          <ul>
            <h4>Here are a Few Highlights:</h4>
            <li>
              <span>
                <FaArrowAltCircleRight />
              </span>
              <i>Full Stack web application developer.</i>
            </li>
            <li>
              <span>
                <FaArrowAltCircleRight />
              </span>
              <i>Interactive Front End React developer.</i>
            </li>
            <li>
              <span>
                <FaArrowAltCircleRight />
              </span>
              <i>Back end developer with Node.js and Express.js.</i>
            </li>
            <li>
              <span>
                <FaArrowAltCircleRight />
              </span>
              <i>Skilled in building RESTful APIs.</i>
            </li>
            <li>
              <span>
                <FaArrowAltCircleRight />
              </span>
              <i>Managing database (MySQL, PostgreSQL, MongoDB).</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
