import React from "react";
import styled, { keyframes } from "styled-components";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4abfea;
  height: 100vh; /* Adjust the height of the container */
`;

const SpinnerMini = styled(CgSpinnerTwoAlt)`
  width: 2.4rem;
  height: 2.4rem;
  color: #febd01;
  animation: ${rotate} 1.5s infinite linear;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerMini />
    </SpinnerContainer>
  );
};

export default Spinner;
