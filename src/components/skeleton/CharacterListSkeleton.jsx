import Skeleton from "react-loading-skeleton";
import {
  CharacterItemSkeletonTable,
  CharacterListSkeletonTable,
  CharacterTextSkeletonTable,
  CharacterListSkeletonGrid,
  CharacterTextSkeletonGrid,
  CharacterItemSkeletonGrid,
} from "./styled/CharacterListSkeleton.styled";
import { useThemeStore } from "../../store";

export default function CharacterListSkeleton({ cards }) {
  const { isGridView } = useThemeStore();

  return (
    <>
      {!isGridView ? (
        <CharacterListSkeletonTable>
          {Array(cards)
            .fill(0)
            .map((item, index) => (
              <CharacterItemSkeletonTable key={index} $isGridView={isGridView}>
                <Skeleton circle height={74} width={74} />
                <CharacterTextSkeletonTable>
                  <Skeleton width={72} height={16} />
                  <Skeleton width={200} height={24} />
                  <Skeleton width={113} height={16} />
                </CharacterTextSkeletonTable>
              </CharacterItemSkeletonTable>
            ))}
        </CharacterListSkeletonTable>
      ) : (
        <CharacterListSkeletonGrid>
          {Array(cards)
            .fill(0)
            .map((item, index) => (
              <CharacterItemSkeletonGrid key={index} $isGridView={isGridView}>
                <Skeleton circle height={120} width={120} />
                <CharacterTextSkeletonGrid>
                  <Skeleton width={72} height={14} />
                  <Skeleton width={150} height={18} />
                  <Skeleton width={113} height={14} />
                </CharacterTextSkeletonGrid>
              </CharacterItemSkeletonGrid>
            ))}
        </CharacterListSkeletonGrid>
      )}
    </>
  );
}
