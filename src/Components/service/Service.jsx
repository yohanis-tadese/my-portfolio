import "./service.scss";
import { FaMobileAlt, FaCode, FaSearch, FaClock } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FiLayers } from "react-icons/fi";
import SectionTitle from "../SectionTitle";

function Service() {
  return (
    <div id="Service" className="service">
      <div className="service_title">
        <SectionTitle title="core services" />
      </div>

      <div className="service-container">
        <div className="service-box">
          <span>
            <FiLayers />
          </span>
          <div className="service-box-details">
            <h3>Fullstack Web Development</h3>
            <p>
              I provide comprehensive end-to-end web solutions, encompassing
              both frontend and backend development, to meet your business
              needs.
            </p>
          </div>
        </div>
        <div className="service-box">
          <span>
            <FaMobileAlt />
          </span>
          <div className="service-box-details">
            <h3>Responsive Website Development</h3>
            <p>
              I specialize in developing websites that adapt seamlessly to
              various devices and screen sizes, ensuring optimal user experience
              across all platforms.
            </p>
          </div>
        </div>
        <div className="service-box">
          <span>
            <FaSearch />
          </span>
          <div className="service-box-details">
            <h3>Search Engine Optimization</h3>
            <p>
              I craft and execute customized SEO strategies to improve your
              website's visibility and drive organic traffic, helping you reach
              your target audience effectively.
            </p>
          </div>
        </div>
        <div className="service-box">
          <span>
            <span>
              <FaCode />
            </span>
          </span>
          <div className="service-box-details">
            <h3>Code Quality Assurance</h3>
            <p>
              I ensure that your codebase adheres to industry best practices and
              standards, promoting maintainability, scalability, and robustness.
            </p>
          </div>
        </div>
        <div className="service-box">
          <span>
            <FaCartShopping />
          </span>
          <div className="service-box-details">
            <h3>E-Commerce Platform Development</h3>
            <p>
              I specialize in developing custom e-commerce platforms tailored to
              your business needs, providing a seamless shopping experience for
              your customers.
            </p>
          </div>
        </div>
        <div className="service-box">
          <span>
            <FaClock />
          </span>
          <div className="service-box-details">
            <h3>Timely Delivery</h3>
            <p>
              I am reliable and devoted to completing projects within the given
              timeframe, consistently delivering successful outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
