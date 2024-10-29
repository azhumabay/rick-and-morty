import styled from "styled-components";

const LocationListSkeletonStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 140px;
`;

const LocationItemSkeleton = styled.div`
  border-radius: 20px;
  overflow: hidden;
`;

const LocationTextSkeleton = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 5px;

  padding: 12px 16px;

  & > div {
    display: flex;
    gap: 5px;
  }
`;

export {
  LocationListSkeletonStyled,
  LocationItemSkeleton,
  LocationTextSkeleton,
};
