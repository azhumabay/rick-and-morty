import styled from "styled-components";

const LocationImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 298px;
  object-fit: cover;
`;

const LocationBack = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 32px;
  left: 16px;
`;

const LocationMain = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  position: absolute;
  top: 251px;
  left: 0;

  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  padding: 22px 16px;
`;

const LocationTitle = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 3px;
  }

  div {
    color: ${({ theme }) => theme.character.unknown};
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;

    display: flex;
    align-items: center;
    gap: 5px;
  }

  span {
    font-size: 28px;
  }
`;

const LocationResidents = styled.div`
  margin-top: 36px;
  margin-bottom: 80px;

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
  }
`;

export {
  LocationImg,
  LocationBack,
  LocationMain,
  LocationTitle,
  LocationResidents,
};
