import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PaginationList = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;

  position: relative;
  left: 0;
  margin-bottom: 100px;
  z-index: 10;
`;

const PaginationItem = styled(NavLink)`
  display: inline-block;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
`;

const Ellipsis = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
`;

export { PaginationList, PaginationItem, Ellipsis };
