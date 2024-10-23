import styled from "styled-components";

const CharacterInfo = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 1.5px;
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CharacterListContent = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export { CharacterInfo, CharacterListContent };
