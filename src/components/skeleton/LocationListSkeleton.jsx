import Skeleton from "react-loading-skeleton";
import {
  LocationItemSkeleton,
  LocationListSkeletonStyled,
  LocationTextSkeleton,
} from "./styled/LocationListSkeleton.styled";

export default function LocationListSkeleton({ cards }) {
  return (
    <LocationListSkeletonStyled>
      {Array(cards)
        .fill(0)
        .map((item, index) => (
          <LocationItemSkeleton key={index}>
            <Skeleton width="100%" height={150} />
            <LocationTextSkeleton>
              <Skeleton height={28} width={121} />
              <div>
                <Skeleton width={26} height={16} />
                &#183;
                <Skeleton width={105} height={16} />
              </div>
            </LocationTextSkeleton>
          </LocationItemSkeleton>
        ))}
    </LocationListSkeletonStyled>
  );
}
