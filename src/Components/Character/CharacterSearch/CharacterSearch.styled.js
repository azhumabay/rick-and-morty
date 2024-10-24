import styled from "styled-components";

const CharacterSearchStyled = styled.div`
  padding-top: 80px;

  span {
    color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1.5px;

    display: inline-block;
    margin-bottom: 24px;
  }
`;

const CharacterNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  img {
    width: 150px;
    height: 251px;
  }

  p {
    display: inline-block;
    width: 216px;

    color: ${({ theme }) => theme.colors.secondary};
    line-height: 24px;
    letter-spacing: 0.15px;
    text-align: center;
  }
`;

const CharacterSearchContent = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { CharacterSearchStyled, CharacterNotFound, CharacterSearchContent };
