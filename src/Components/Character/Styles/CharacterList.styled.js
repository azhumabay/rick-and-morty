import { Link } from "react-router-dom";
import styled from "styled-components";

const CharacterListStyled = styled.ul`
  padding-top: 20px;
  list-style: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 0;

  display: ${({ $isGridView }) => ($isGridView ? "grid" : "flex")};
  flex-direction: ${({ $isGridView }) => ($isGridView ? "initial" : "column")};
  grid-template-columns: ${({ $isGridView }) =>
    $isGridView ? "1fr 1fr" : "none"};
  gap: 24px;
  margin-bottom: 24px;
`;

const CharacterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export { CharacterListStyled, CharacterLink };
