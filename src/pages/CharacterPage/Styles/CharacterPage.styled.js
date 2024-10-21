import { Link } from "react-router-dom";
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
  margin-bottom: 36px;

  h1 {
    font-size: 34px;
    line-height: 40px;
    letter-spacing: 0.25px;
  }

  span {
    color: ${({ theme, $statuscolor }) => theme.character[$statuscolor]};
    font-size: 10px;

    letter-spacing: 1.5px;
  }
`;

const CharacterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  span {
    display: inline-block;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 12px;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
`;

const CharacterInfo = styled.div`
  display: flex;
  gap: 118px;
`;

const CharacterPlace = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;

  div {
    flex-basis: calc(100% - 20px);
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
  CharacterInfoWrapper,
  CharacterInfo,
  CharacterPlace,
};
