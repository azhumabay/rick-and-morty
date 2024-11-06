import {
  SettingsModalStyled,
  SettingsModalWrapper,
  SettingsModalRadio,
  SettingsModalItem,
  SettingsModalClose,
} from "./Settings.styled";
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
          <SettingsModalRadio $isDarkMode={!isDarkMode} />
          <p>Выключена</p>
        </SettingsModalItem>

        <SettingsModalItem onClick={setDarkTheme}>
          <SettingsModalRadio $isDarkMode={isDarkMode} />
          <p>Включена</p>
        </SettingsModalItem>

        <SettingsModalClose>
          <span onClick={toggleModal}>ОТМЕНА</span>
        </SettingsModalClose>
      </SettingsModalWrapper>
    </SettingsModalStyled>
  );
}
