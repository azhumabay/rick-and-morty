import { useNavigate } from "react-router-dom";
import {
  SettingsHeader,
  ThemeWrapper,
  Theme,
  ThemeText,
} from "./Settings.styled";
import { RightArrow, ThemeIcon, LeftArrow } from "../../components/Icons";
import SettingsModal from "./SettingsModal";
import { useState } from "react";
import useThemeStore from "../../store/useThemeStore";

export default function SettingsPage() {
  const { isDarkMode } = useThemeStore();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <SettingsHeader>
        <LeftArrow onClick={goBack} />
        <h2>Настройки</h2>
      </SettingsHeader>

      {modal && <SettingsModal toggleModal={toggleModal} />}

      <ThemeWrapper>
        <span>ВНЕШНИЙ ВИД</span>
        <Theme onClick={toggleModal}>
          <ThemeIcon />
          <ThemeText>
            Темная тема <span>{isDarkMode ? "Включена" : "Выключена"}</span>
          </ThemeText>
          <RightArrow />
        </Theme>
      </ThemeWrapper>
    </>
  );
}
