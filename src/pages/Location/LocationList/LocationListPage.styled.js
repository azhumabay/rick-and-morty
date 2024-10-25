import styled from "styled-components";

const LocationInfo = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 1.5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const LocationListContent = styled.div`
  min-height: ${({ $isSearchOpen }) =>
    $isSearchOpen ? "calc(100vh - 40px)" : "calc(100vh - 120px)"};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: ${({ $isSearchOpen }) => ($isSearchOpen ? "40px" : "0")};
`;

const LocationNotFound = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;

  p {
    display: inline-block;
    width: 216px;

    color: ${({ theme }) => theme.colors.secondary};
    line-height: 24px;
    letter-spacing: 0.15px;
    text-align: center;
  }
`;

export { LocationInfo, LocationListContent, LocationNotFound };
