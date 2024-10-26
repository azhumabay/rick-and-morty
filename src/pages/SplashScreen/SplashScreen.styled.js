import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(5px);
  }
  to {
    transform: translateY(-20px);
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
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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
  height: calc(40vh);
  animation: ${slideUp} 2s ease forwards;
`;

const SplashScreenImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export {
  SplashScreenStyled,
  SplashScreenTitle,
  SplashScreenMorty,
  SplashScreenRick,
  SplashScreenImgWrapper,
};
