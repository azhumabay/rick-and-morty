import { useNavigate } from "react-router-dom";
import {
  SettingsHeader,
  ThemeWrapper,
  Theme,
  ThemeText,
} from "./Settings.styled";
import { RightArrow, ThemeIcon, LeftArrow } from "../../Components/Icons";
import SettingsModal from "./SettingsModal";
import { useState } from "react";

export default function SettingsPage() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    console.log("Кнопка нажата");
    navigate(-1);
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <SettingsHeader>
        <LeftArrow goBack={goBack} />
        <h2>Настройки</h2>
      </SettingsHeader>

      {modal && <SettingsModal toggleModal={toggleModal} />}

      <ThemeWrapper>
        <span>ВНЕШНИЙ ВИД</span>
        <Theme onClick={toggleModal}>
          <ThemeIcon color="white" />
          <ThemeText>
            Темная тема <span>Включена</span>
          </ThemeText>
          <RightArrow />
        </Theme>
      </ThemeWrapper>
    </>
  );
}
