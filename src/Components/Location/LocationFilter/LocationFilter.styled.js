import styled from "styled-components";

const LocationFilterHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 430px;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.primary};

  padding: 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 431px) {
    left: 0;
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
  }
`;

const LocationFilterContent = styled.div`
  padding: 0 16px;
  padding-top: calc(32px + 52px);
  display: flex;
  flex-direction: column;
  gap: 36px;

  span {
    display: inline-block;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
`;

const LocationFilterDivider = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const LocationFilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }

  p {
    color: ${({ theme }) => theme.episode.air_date};
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
`;

// LocationType
const LocationListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 80px;

  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: 24px;
    letter-spacing: 0.15px;

    &.active {
      color: ${({ theme }) => theme.colors.active};
    }
  }
`;

export {
  LocationFilterHeader,
  LocationFilterContent,
  LocationFilterDivider,
  LocationFilterSection,
  LocationListWrapper,
};
