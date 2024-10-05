import my_image from "../../assets/core-image/my_image.jpg";
import SectionTitle from "../SectionTitle";
import { FaArrowAltCircleRight } from "react-icons/fa";

function About() {
  return (
    <div id="About" className="py-12 bg-[#F5F8FD]">
      <div className="text-center mb-12">
        <SectionTitle title="About me" />
      </div>

      <div className="lg:m-10 flex flex-col lg:flex-row items-center lg:space-x-10 space-y-0 lg:space-y-0 lg:px-16 ">
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border-2 border-dotted border-blue-500 p-1 shadow-lg transform transition-all duration-100 hover:scale-105">
            <img
              src={my_image}
              alt="Profile"
              className="w-full h-full rounded-full object-cover shadow-md transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3  p-8 ">
          <h3 className="text-lg md:text-3xl font-bold mb-4">
            Full-stack Software Developer
          </h3>
          <p className="leading-relaxed mb-4 text-sm lg:text-[1rem]">
            Hello! I'm Yohanis Tadese and I'm passionate about bringing ideas to
            life on the internet. My expertise lies in crafting robust and
            dynamic web applications tailored to meet diverse client needs. With
            a keen eye for detail and a passion for innovation, I excel in
            leveraging the latest tools and techniques to deliver high-quality
            solutions.
          </p>
          <p className="leading-relaxed mb-6 text-sm lg:text-[1rem]">
            My commitment to excellence drives me to continuously enhance my
            skills and stay abreast of industry trends. I thrive in
            collaborative environments where I can contribute my creativity and
            technical prowess to drive projects to success.
          </p>

          <ul className="list-none space-y-3">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Here are a Few Highlights:
            </h4>
            <li className="flex items-center">
              <FaArrowAltCircleRight className="mr-2 text-textroyalBlue" />
              <span className="text-sm">
                Full Stack web application developer.
              </span>
            </li>
            <li className="flex items-center">
              <FaArrowAltCircleRight className="mr-2 text-textroyalBlue" />
              <span className="text-sm">
                Interactive Front End React developer.
              </span>
            </li>
            <li className="flex items-center">
              <FaArrowAltCircleRight className="mr-2 text-textroyalBlue" />
              <span className="text-sm">
                Back end developer with Node.js and Express.js.
              </span>
            </li>
            <li className="flex items-center">
              <FaArrowAltCircleRight className="mr-2 text-textroyalBlue" />
              <span className="text-sm">Skilled in building RESTful APIs.</span>
            </li>
            <li className="flex items-center">
              <FaArrowAltCircleRight className="mr-2 text-textroyalBlue" />
              <span className="text-sm">
                Managing database (MySQL, PostgreSQL, MongoDB).
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
