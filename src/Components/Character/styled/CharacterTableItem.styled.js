import styled from "styled-components";

const CharacterItemTable = styled.li`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const CharacterTableImg = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 100px;
`;

const CharacterTableText = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 24px;
  }

  span {
    color: ${({ theme }) => theme.character.info};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 16px;
  }

  p {
    color: ${({ theme, $statuscolor }) => theme.character[$statuscolor]};
    font-size: 10px;
    font-size: 500;
    letter-spacing: 1.5px;
    line-height: 16px;
  }
`;

export { CharacterItemTable, CharacterTableImg, CharacterTableText };
