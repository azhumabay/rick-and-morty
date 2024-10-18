import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  height: 60px;
  background-color: rgba(21, 42, 58, 1);
  padding: 8px 10px 12px 10px;

  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  max-width: 420px;
`;

const NavList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  height: 40px;
`;

const NavItem = styled(NavLink)`
  font-size: 12px;
  color: rgba(91, 105, 117, 1);
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  &.active {
    color: rgba(67, 208, 73, 1);
  }
`;

const IconSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: #5b6975;
  stroke: #5b6975;

  .active & {
    fill: rgba(67, 208, 73, 1);
    stroke: rgba(67, 208, 73, 1);
  }
`;

export { StyledHeader, NavList, NavItem, IconSvg };
