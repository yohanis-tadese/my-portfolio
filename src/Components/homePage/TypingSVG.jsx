import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLink = styled.a`
  margin: 20px 0;
  text-decoration: none;
`;

const TypingImage = styled.img`
  border: 1px solid #a6e6fd;
  border-radius: 10px;
  box-shadow: -1px -1px 4px 4px rgba(0, 0, 0, 0.1);
  font-weight: 770;
  max-width: 400px;
  width: 95%;
  height: 100px;
  border-radius: 5px;
  border-bottom-right-radius: 9px;
  border-top-left-radius: 9px;
`;

const TypingSVG = () => {
  return (
    <Container>
      <StyledLink>
        <TypingImage
          src="https://readme-typing-svg.herokuapp.com?lines=I'm+Full-Stack+Developer;I'm+React+Developer;I'm+Frontend+Developer;I'm+Backend+Developer;&size=24&center=true&width=435&height=50&speed=3000&pause=1000"
          alt="Typing SVG"
        />
      </StyledLink>
    </Container>
  );
};

export default TypingSVG;
