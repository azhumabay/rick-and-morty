import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const EpisodeListSkeletonStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const EpisodeItemSkeleton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const EpisodeImgSkeleton = styled(Skeleton)`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

const EpisodeTextWrapperSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export {
  EpisodeListSkeletonStyled,
  EpisodeItemSkeleton,
  EpisodeImgSkeleton,
  EpisodeTextWrapperSkeleton,
};
