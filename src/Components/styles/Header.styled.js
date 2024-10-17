import styled from "styled-components";

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

const NavItem = styled.li`
  font-size: 12px;
  color: rgba(91, 105, 117, 1);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const NavImg = styled.img`
  width: 24px;
  height: 24px;
`;

export { StyledHeader, NavList, NavItem, NavImg };
