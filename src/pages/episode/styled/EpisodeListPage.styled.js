import styled from "styled-components";

const EpisodeListPageInfo = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-top: ${({ $isSearchOpen }) => ($isSearchOpen ? "70px" : "0px")};
`;

const EpisodeListContent = styled.div`
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const EpisodeNotFound = styled.div`
  height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;

  img {
    width: 161px;
    height: 212px;
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

export { EpisodeListPageInfo, EpisodeListContent, EpisodeNotFound };
