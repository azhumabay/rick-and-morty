import styled from "styled-components";

const CharacterListSkeletonTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CharacterItemSkeletonTable = styled.div`
  display: flex;
  gap: 18px;
`;

const CharacterTextSkeletonTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CharacterListSkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

const CharacterItemSkeletonGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
`;

const CharacterTextSkeletonGrid = styled.div``;

export {
  CharacterListSkeletonTable,
  CharacterItemSkeletonTable,
  CharacterTextSkeletonTable,
  CharacterListSkeletonGrid,
  CharacterItemSkeletonGrid,
  CharacterTextSkeletonGrid,
};
