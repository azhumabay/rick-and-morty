import {
  SettingsModalStyled,
  SettingsModalWrapper,
  SettingsModalRadio,
  SettingsModalItem,
  SettingsModalClose,
} from "./Settings.styled";
import selected from "@assets/images/selected.svg";
import deselected from "@assets/images/deselected.svg";

export default function SettingsModal({ toggleModal }) {
  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <SettingsModalStyled onClick={handleModalClick}>
      <SettingsModalWrapper>
        <h2>Темная тема</h2>

        <SettingsModalItem>
          <SettingsModalRadio src={deselected} />
          <p>Выключена</p>
        </SettingsModalItem>

        <SettingsModalItem>
          <SettingsModalRadio src={selected} />
          <p>Включена</p>
        </SettingsModalItem>

        <SettingsModalClose>
          <span onClick={toggleModal}>ОТМЕНА</span>
        </SettingsModalClose>
      </SettingsModalWrapper>
    </SettingsModalStyled>
  );
}
