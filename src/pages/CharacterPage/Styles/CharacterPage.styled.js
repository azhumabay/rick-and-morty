import styled from "styled-components";

const CharacterHeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 218px;
  width: 100%;
`;

const CharacterHeaderBlur = styled.div`
  backdrop-filter: blur(3px);
  background: linear-gradient(
      0deg,
      rgba(11, 30, 45, 0.65),
      rgba(11, 30, 45, 0.65)
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(11, 30, 45, 0) 37.29%,
      rgba(11, 30, 45, 0) 68.93%
    );

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const CharacterHeader = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 0;
`;

const CharacterBack = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
`;

const CharacterImg = styled.img`
  width: 146px;
  height: 146px;

  position: absolute;
  top: calc(218px - 73px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  border-radius: 100%;
  border: 8px solid ${({ theme }) => theme.colors.background};
`;

const CharacterMain = styled.div`
  padding-top: calc(218px + 90px);
  color: ${({ theme }) => theme.colors.text};
`;

const CharacterTitle = styled.div`
  text-align: center;

  h1 {
    font-size: 34px;
    line-height: 40px;
    letter-spacing: 0.25px;
  }

  span {
    color: ${({ theme, $statuscolor }) => theme.character[$statuscolor]};
  }
`;

export {
  CharacterHeaderWrapper,
  CharacterHeaderBlur,
  CharacterHeader,
  CharacterImg,
  CharacterBack,
  CharacterMain,
  CharacterTitle,
};
