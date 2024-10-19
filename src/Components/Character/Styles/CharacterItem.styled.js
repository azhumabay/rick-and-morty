import styled from "styled-components";

const CharacterItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const CharacterImg = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 100px;
`;

const CharacterText = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.character.info};
  }

  p {
    color: ${({ theme, statusColor }) => theme.character[statusColor]};
  }
`;

export { CharacterItemStyled, CharacterImg, CharacterText };
