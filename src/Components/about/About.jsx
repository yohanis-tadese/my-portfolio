import "./about.scss";
import my_image from "../../assets/core-image/hero_img.png";
import SectionTitle from "../SectionTitle";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h2>About Me</h2>
        <SectionTitle title="Some Things about me" />
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
          <h2>I'M Yohanis Tadese </h2>
          <h3>Full Stack (MERN) Based Developer </h3>
          <span>
            My expertise lies in crafting robust and dynamic web applications
            tailored to meet diverse client needs. With a keen eye for detail
            and a passion for innovation, I excel in leveraging the latest tools
            and techniques to deliver high-quality solutions.
          </span>
          <span>
            My commitment to excellence drives me to continuously enhance my
            skills and stay abreast of industry trends. I thrive in
            collaborative environments where I can contribute my creativity and
            technical prowess to drive projects to success.
          </span>
          <ul>
            <li>
              <i>Email</i>: yohanistadese06@gmail.com
            </li>
            <li>
              <i>Phone number:</i> +251 984751233
            </li>
            <li>
              <i>Telegram username</i> : @yohanistadese
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
