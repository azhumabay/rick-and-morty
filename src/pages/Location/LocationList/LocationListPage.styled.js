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
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export { LocationInfo, LocationListContent };
