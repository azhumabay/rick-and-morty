import { Link } from "react-router-dom";
import styled from "styled-components";

const EpisodeItemStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
`;

const EpisodeItemPng = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
`;

const EpisodeItemText = styled.div`
  p {
    color: ${({ theme }) => theme.episode.episode};
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1.5px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  span {
    color: ${({ theme }) => theme.episode.air_date};
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
`;

export { EpisodeItemStyled, EpisodeItemPng, EpisodeItemText };
