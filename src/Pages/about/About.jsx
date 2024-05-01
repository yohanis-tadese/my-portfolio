import "./about.scss";
import my_image from "../../assets/core-image/hero_img.png";
import styled from "styled-components";

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    img {
      position: relative;
      border-radius: 4px;
      mix-blend-mode: multiply;
      transition: filter 0.5s ease; 

      border: 1em solid rebeccapurple;
      box-shadow:
        inset -1px -1px red,
        2px 2px yellow;
    
    }


`;

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h2>About Me</h2>
        <span>Informations About Me</span>
      </div>
      <div className="about-content">
        <div className="about-detail">
          <h2>I'M Yohanis Tadese </h2>
          <h3>Full Stack (MERN) Based Developer </h3>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            magnam, adipisci consequatur dolore ut repudiandae exercitationem ad
            corrupti id officia minus hic perspiciatis blanditiis eos numquam
            impedit consectetur placeat quaerat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            consequuntur quo dignissimos maiores. Voluptas dicta ducimus quasi
            molestias tenetur est repellendus sequi, aperiam magnam omnis,
            ratione ullam maxime minima et! Sed ducimus architecto id beatae
            doloribus nemo veniam quos ipsa deleniti omnis obcaecati dolores
            facere corporis, quod, vero harum doloremque, enim numquam?
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
        <div className="about-image">
          <StyledPic>
            <div className="wrapper">
              <img
                src={my_image}
                width={500}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
          </StyledPic>
        </div>
      </div>
    </div>
  );
}

export default About;
