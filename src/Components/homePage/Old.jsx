import "./homepage.scss";
import Hero_image from "../../assets/core-image/hero.jpg";

function Homepage() {
  return (
    <div id="home" className="homepage">
      <div className="left-side">
        <span>Hello, my name is</span>
        <h2>Yohanis Tadese</h2>
        <h2>I build things for the web</h2>
        <h3>
          I'm a versatile full-stack developer with a passion for crafting
          impactful digital solutions. I thrive in creating user-friendly
          interfaces and robust backend systems.
        </h3>
        <div className="buttons">
          <button className="btn button-one">Downlode CV</button>
          <button className="btn button-two">My Work</button>
        </div>
      </div>
      <div className="right-side">
        <img src={Hero_image} alt="" />
      </div>
    </div>
  );
}

export default Homepage;
