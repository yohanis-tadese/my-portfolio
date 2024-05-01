import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import "./mySkill.scss";

function MySkill() {
  return (
    <div id="skill" className="mySkill">
      <div className="skill_title">
        <h2>My Skills</h2>
        <span>My Expertise</span>
      </div>
      <div className="skill">
        <div className="box">
          <span>
            <FaCode />
          </span>
          <h2>Front-end Development</h2>
          <p>
            Front-end development involves creating the user interface of a
            website or web application. It includes working with HTML, CSS, and
            JavaScript to build interactive and visually appealing experiences.
          </p>
          <ul>
            <li style={{ backgroundColor: "#EFD81D" }}>JavaScript</li>
            <li style={{ backgroundColor: "#5ED3F3" }}>React</li>
            <li style={{ backgroundColor: "#45A7AC" }}>Tailwind</li>
          </ul>
        </div>
        <div className="box">
          <span>
            <FaServer />
          </span>
          <h2>Back-end Development</h2>
          <p>
            Back-end development focuses on server-side programming and database
            management. It involves handling data storage, user authentication,
            and server operations.
          </p>
          <ul>
            <li style={{ backgroundColor: "#71B156" }}>Node.js</li>
            <li style={{ backgroundColor: "#5AD2F5" }}>Express.js</li>
            <li style={{ backgroundColor: "#01AFDF" }}>RestAPI</li>
          </ul>
        </div>
        <div className="box">
          <span>
            <FaDatabase />
          </span>
          <h2>Database Management</h2>
          <p>
            Database management involves designing, implementing, and
            maintaining databases. It includes working with SQL and NoSQL
            databases to store and retrieve data efficiently.
          </p>
          <ul>
            <li style={{ backgroundColor: "#1491BB" }}>SQL</li>
            <li style={{ backgroundColor: "#005E86" }}>MySQL</li>
            <li style={{ backgroundColor: "#4DA53F" }}>MongoDB</li>
          </ul>
        </div>
        <div className="box">
          <span>
            <FaTools />
          </span>
          <h2>DevOps and Deployment</h2>
          <p>
            DevOps and deployment cover the processes and tools used for
            continuous integration, deployment, and monitoring of applications.
            It involves version control, cloud platforms, and server management.
          </p>
          <ul>
            <li style={{ backgroundColor: "#E84D31" }}>Git</li>
            <li style={{ backgroundColor: "#222E3C" }}>AWS</li>
            <li style={{ backgroundColor: "#571DAC" }}>Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MySkill;
