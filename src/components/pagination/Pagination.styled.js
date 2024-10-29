import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PaginationList = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.primary};

  position: fixed;
  bottom: ${({ $isSearchOpen }) => ($isSearchOpen ? "0px" : "60px")};
  padding: ${({ $isSearchOpen }) => ($isSearchOpen ? "20px 0" : "10px 0")};
  width: 430px;

  @media screen and (max-width: 431px) {
    width: 100%;
    left: 0;
  }
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
