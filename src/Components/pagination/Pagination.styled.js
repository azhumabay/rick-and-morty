import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PaginationList = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;

  margin-bottom: 100px;
`;

const PaginationItem = styled(NavLink)`
  background: ${({ theme, $active }) =>
    $active ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
`;

const Ellipsis = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
`;

export { PaginationList, PaginationItem, Ellipsis };
