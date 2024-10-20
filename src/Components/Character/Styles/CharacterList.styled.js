import { Link } from "react-router-dom";
import styled from "styled-components";

const CharacterListStyled = styled.ul`
  margin-top: 20px;
  list-style: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 80px;
`;

const CharacterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export { CharacterListStyled, CharacterLink };
