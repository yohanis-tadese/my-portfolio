import { Link, animateScroll as scroll } from "react-scroll";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.scss";

const Footer = () => {
  // scroll to top
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="footer">
      <div className="footer-star"></div>
      <div className="container mt-3 pt-3">
        <div className="row">
          <div className="col-md-4 ps-md-4 logo-links">
            <h4> More about me </h4>
            <ul className="footer-social-list list-social list-inline">
              <li>
                <a
                  href="https://github.com/Jhontadese"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jhontadese"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="mailto:yohanistadese06@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdEmail />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/yohanistadese"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 ps-md-5">
            <h4> Useful Link </h4>
            <ul className="list-menu">
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="Resume"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  exact="true"
                  duration={1200}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="Portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  exact="true"
                  duration={1200}
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div className=" col-md-4 contact-inf-link">
            <h4> Contact Info </h4>
            <ul className="list-menu contact-list">
              <li> yohanistadese06@gmail.com </li>
              <li> +251984751233 </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
