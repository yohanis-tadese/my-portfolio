import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import "./sideBar.scss";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="side">
        <li>
          <a
            href="https://github.com/yohanis-tadese"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yohanis-tadese-0368a8318/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:yohanistadese06@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
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
      </div>
    </div>
  );
}

export default SideBar;
