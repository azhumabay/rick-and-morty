import styled from "styled-components";

const CharacterInfo = styled.div`
  padding-top: ${({ $isSearchOpen }) => ($isSearchOpen ? "70px" : "0px")};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 1.5px;
  margin-bottom: 24px;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CharacterListContent = styled.div`
  min-height: calc(100vh - 130px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const CharacterNotFound = styled.div`
  height: calc(65vh);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export { CharacterInfo, CharacterListContent, CharacterNotFound };
