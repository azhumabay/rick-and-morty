import styled from "styled-components";

const EpisodePageImgWrapper = styled.div`
  position: relative;
`;

const EpisodePageImg = styled.img`
  width: 100%;
  height: 298px;

  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  object-fit: cover;
`;

const EpisodePageClose = styled.img`
  position: absolute;
  z-index: 0;
  top: 61px;
  left: 16px;
`;

const EpisodePageMain = styled.main`
  height: 100px;
  width: 100%;

  position: absolute;
  top: 251px;
  left: 0;

  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  padding: 82px 16px;

  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const EpisodePageTitle = styled.div`
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  span {
    color: ${({ theme }) => theme.episode.episode};
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1.5px;
  }
`;

const EpisodePageInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 12px;
    letter-spacing: 0.5px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
`;

const EpisodeDivider = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const EpisodeCharacters = styled.div`
  padding-bottom: 80px;

  & > h2 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    margin-bottom: 24px;
  }
`;

export {
  EpisodePageImg,
  EpisodePageMain,
  EpisodePageTitle,
  EpisodePageImgWrapper,
  EpisodePageClose,
  EpisodePageInfo,
  EpisodeDivider,
  EpisodeCharacters,
};
