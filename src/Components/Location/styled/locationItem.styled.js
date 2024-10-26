import { Link } from "react-router-dom";
import styled from "styled-components";

const LocationItemStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const LocationImg = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
`;

const LocationInfo = styled.div`
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.primary};

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
  }

  div {
    color: ${({ theme }) => theme.character.unknown};
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 5px;
  }

  span {
    font-size: 28px;
  }
`;

export { LocationItemStyled, LocationImg, LocationInfo };
