import { StyledHeader, NavList, NavItem } from "./AppHeader.styled";
import {
  CharactersIcon,
  LocationIcon,
  EpisodesIcon,
  SettingsIcon,
} from "../Icons";

import APP_PATH from "../../const/router";

export default function AppHeader() {
  return (
    <StyledHeader>
      <NavList>
        <NavItem to={APP_PATH.CHARACTERS}>
          <CharactersIcon />
          <span>Персонажи</span>
        </NavItem>

        <NavItem to={APP_PATH.LOCATIONS}>
          <LocationIcon />
          <span>Локации</span>
        </NavItem>

        <NavItem to={APP_PATH.EPISODES}>
          <EpisodesIcon />
          <span>Эпизоды</span>
        </NavItem>

        <NavItem to={APP_PATH.SETTINGS}>
          <SettingsIcon />
          <span>Настройки</span>
        </NavItem>
      </NavList>
    </StyledHeader>
  );
}
