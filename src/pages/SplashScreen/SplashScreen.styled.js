import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(-50px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-40px);
  }
  to {
    transform: translateY(-30px);
  }
`;

const SplashScreenStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const SplashScreenTitle = styled.img`
  margin-top: 12px;
  object-fit: contain;
  width: calc(40vh);
  height: calc(40vh);
`;

const SplashScreenMorty = styled.img`
  width: calc(40vh);
  height: calc(40vh);
  flex-grow: 1;
  animation: ${slideDown} 2s ease forwards;
`;

const SplashScreenRick = styled.img`
  width: calc(40vh);
  height: calc(40vh);
  animation: ${slideUp} 2s ease forwards;
`;

export {
  SplashScreenStyled,
  SplashScreenTitle,
  SplashScreenMorty,
  SplashScreenRick,
};
