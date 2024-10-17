import { StyledHeader, NavList, NavItem, NavImg } from "./styles/Header.styled";
import episodes from "../assets/images/episode.svg";
import characters from "../assets/images/characters.svg";
import location from "../assets/images/location.svg";
import settings from "../assets/images/settings.svg";

export default function AppHeader() {
  return (
    <StyledHeader>
      <NavList>
        <NavItem>
          <NavImg src={characters} />
          <span>Персонажи</span>
        </NavItem>
        <NavItem>
          <NavImg src={location} />
          <span>Локации</span>
        </NavItem>
        <NavItem>
          <NavImg src={episodes} />
          <span>Эпизоды</span>
        </NavItem>
        <NavItem>
          <NavImg src={settings} />
          <span>Настройки</span>
        </NavItem>
      </NavList>
    </StyledHeader>
  );
}
