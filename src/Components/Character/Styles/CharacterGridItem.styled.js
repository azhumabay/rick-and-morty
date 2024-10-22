import styled from "styled-components";

const CharacterGridStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  min-height: 120px;
`;

const CharacterGridImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100px;
`;

const CharacterGridText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;

  p {
    color: ${({ theme, $statuscolor }) => theme.character[$statuscolor]};
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1.5px;
  }

  h2 {
    font-size: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
  }

  span {
    color: ${({ theme }) => theme.character.info};
    font-size: 12px;
  }
`;

export { CharacterGridStyled, CharacterGridImg, CharacterGridText };
