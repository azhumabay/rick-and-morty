import {
  SettingsModalStyled,
  SettingsModalWrapper,
  SettingsModalRadio,
  SettingsModalItem,
  SettingsModalClose,
} from "./Settings.styled";
import selected from "@assets/images/selected.svg";
import deselected from "@assets/images/deselected.svg";
import useThemeStore from "../../store/useThemeStore";

export default function SettingsModal({ toggleModal }) {
  const { isDarkMode, setDarkTheme, setLightTheme } = useThemeStore();

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <SettingsModalStyled onClick={handleModalClick}>
      <SettingsModalWrapper>
        <h2>Темная тема</h2>

        <SettingsModalItem onClick={setLightTheme}>
          <SettingsModalRadio src={isDarkMode ? deselected : selected} />
          <p>Выключена</p>
        </SettingsModalItem>

        <SettingsModalItem onClick={setDarkTheme}>
          <SettingsModalRadio src={isDarkMode ? selected : deselected} />
          <p>Включена</p>
        </SettingsModalItem>

        <SettingsModalClose>
          <span onClick={toggleModal}>ОТМЕНА</span>
        </SettingsModalClose>
      </SettingsModalWrapper>
    </SettingsModalStyled>
  );
}
