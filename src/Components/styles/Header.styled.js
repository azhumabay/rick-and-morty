import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  height: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 8px 10px 12px 10px;
  box-shadow: 0px -4px 30px 0px rgba(0, 0, 0, 0.08);

  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  max-width: 430px;
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
  -webkit-tap-highlight-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  &.active {
    color: ${({ theme }) => theme.colors.active};
  }
`;

const IconSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: #5b6975;
  stroke: #5b6975;

  .active & {
    fill: ${(props) => props.theme.colors.active};
    stroke: ${(props) => props.theme.colors.active};
  }
`;

export { StyledHeader, NavList, NavItem, IconSvg };
