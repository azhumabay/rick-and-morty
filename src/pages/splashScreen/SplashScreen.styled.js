import styled, { keyframes } from "styled-components";
import splashScreenBackground from "@assets/images/splashScreenBackground.png";

const slideUp = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-25px);
  }
  to {
    transform: translateY(-10px);
  }
`;

const SplashScreenStyled = styled.div`
  height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: rgba(11, 30, 45, 1);
`;

const SplashScreenBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;

  opacity: 0.2;
  background: url(${splashScreenBackground});
`;

const SplashScreenTitle = styled.img`
  object-fit: contain;
  width: calc(45vh);
  height: calc(45vh);
`;

const SplashScreenMorty = styled.img`
  width: calc(40vh);
  height: calc(25vh);

  object-fit: cover;
  object-position: bottom;
  animation: ${slideDown} 2s ease forwards;
`;

const SplashScreenRick = styled.img`
  width: calc(40vh);
  animation: ${slideUp} 2s ease forwards;
`;

export {
  SplashScreenStyled,
  SplashScreenTitle,
  SplashScreenMorty,
  SplashScreenRick,
  SplashScreenBackground,
};
