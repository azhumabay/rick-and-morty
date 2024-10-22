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
`;

export { EpisodeListPageInfo };
