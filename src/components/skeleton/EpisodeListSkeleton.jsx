import Skeleton from "react-loading-skeleton";
import {
  EpisodeImgSkeleton,
  EpisodeItemSkeleton,
  EpisodeListSkeletonStyled,
  EpisodeTextWrapperSkeleton,
} from "./styled/EpisodeListSkeleton.styled";

export default function EpisodeListSkeleton({ cards }) {
  return (
    <EpisodeListSkeletonStyled>
      {Array(cards)
        .fill(0)
        .map((item, index) => (
          <EpisodeItemSkeleton key={index}>
            <EpisodeImgSkeleton />

            <EpisodeTextWrapperSkeleton>
              <Skeleton width={80} />
              <Skeleton width={200} height={16} />
              <Skeleton width={104} height={16} />
            </EpisodeTextWrapperSkeleton>
          </EpisodeItemSkeleton>
        ))}
    </EpisodeListSkeletonStyled>
  );
}
